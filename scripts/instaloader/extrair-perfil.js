#!/usr/bin/env node
// Extrai metadata de perfis do Instagram via Apify
// Uso: node extrair-perfil.js username1 username2 ...
// Saída: JSON no stdout com metadata de cada perfil

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Carrega .env
const envPath = path.join(__dirname, "..", "..", ".env");
const env = readFileSync(envPath, "utf8");
const envVars = {};
for (const line of env.split("\n")) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith("#")) continue;
  const eq = trimmed.indexOf("=");
  if (eq === -1) continue;
  envVars[trimmed.slice(0, eq).trim()] = trimmed.slice(eq + 1).trim();
}

const APIFY_API_TOKEN = envVars.APIFY_API_TOKEN;
if (!APIFY_API_TOKEN) {
  console.error(JSON.stringify({ error: "APIFY_API_TOKEN não configurado no .env" }));
  process.exit(1);
}

const usernames = process.argv.slice(2).filter((u) => u.trim().length > 0);
if (usernames.length === 0) {
  console.error(JSON.stringify({ error: "Uso: node extrair-perfil.js username1 username2 ..." }));
  process.exit(1);
}

const ACTOR_ID = "instagram-scraper~instagram-profile-scraper";

async function runActor(input) {
  const startR = await fetch(
    `https://api.apify.com/v2/acts/${ACTOR_ID}/runs?token=${APIFY_API_TOKEN}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    }
  );
  const start = await startR.json();
  if (!start.data || !start.data.id) {
    throw new Error(`Falha ao iniciar run: ${JSON.stringify(start)}`);
  }
  const runId = start.data.id;

  while (true) {
    await new Promise((r) => setTimeout(r, 3000));
    const statusR = await fetch(
      `https://api.apify.com/v2/actor-runs/${runId}?token=${APIFY_API_TOKEN}`
    );
    const status = await statusR.json();
    if (["SUCCEEDED", "FAILED", "TIMED-OUT", "ABORTED"].includes(status.data.status)) {
      return status.data;
    }
  }
}

async function getResults(runId) {
  const r = await fetch(
    `https://api.apify.com/v2/actor-runs/${runId}/dataset/items?token=${APIFY_API_TOKEN}`
  );
  return r.json();
}

try {
  const result = await runActor({
    instagramUsernames: usernames,
    skipLatestPosts: false,
    skipRelatedProfiles: true,
    scrapeFacebookProfile: false,
  });

  if (result.status === "SUCCEEDED") {
    const items = await getResults(result.id);
    // Normaliza output: transforma array de items do Apify em formato uniforme
    const normalized = items.map((item) => ({
      username: item.username || item.instagramUsername,
      user_id: item.userId || item.id,
      full_name: item.fullName || item.full_name,
      biography: item.biography || item.bio,
      external_url: item.externalUrl || item.external_url,
      followers: item.followers || item.follower_count,
      followees: item.following || item.following_count,
      mediacount: item.postsCount || item.media_count,
      is_private: item.isPrivate || false,
      is_verified: item.isVerified || false,
      is_business_account: item.isBusiness || false,
      category: item.category || null,
      profile_pic_url: item.profilePicUrl || item.profile_pic_url,
      latest_posts: (item.latest_posts || []).map((p) => ({
        shortcode: p.shortcode,
        likes: p.like_count || p.likes,
        comments: p.comment_count || p.comments,
        is_video: p.is_video || false,
        taken_at: p.taken_at || p.taken_at_timestamp,
        caption: (p.caption?.text || p.caption || "").slice(0, 200),
      })),
      ig_status: item.ig_status || "ok",
      error: null,
    }));
    console.log(JSON.stringify(normalized, null, 2));
  } else {
    console.error(JSON.stringify({ error: `Run falhou: ${result.status}` }));
    process.exit(1);
  }
} catch (e) {
  console.error(JSON.stringify({ error: e.message }));
  process.exit(1);
}
