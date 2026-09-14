import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "{{BUSINESS_NAME}} — {{TAGLINE}}",
  description: "{{BUSINESS_DESCRIPTION}}",
  openGraph: {
    title: "{{BUSINESS_NAME}}",
    description: "{{BUSINESS_DESCRIPTION}}",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-navy text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
