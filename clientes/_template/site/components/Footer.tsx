"use client";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-16 md:py-24">
      <div className="container-page flex flex-col items-center text-center gap-6">
        <img
          src="/logo.png"
          alt="{{PRIMARY_BRAND}}"
          className="h-14 md:h-24 w-auto"
        />
        <p className="text-base md:text-lg text-white/60 max-w-md">
          {{TAGLINE}}
        </p>
        <p className="text-sm text-white/40">
          © {new Date().getFullYear()} {{BUSINESS_NAME}}
        </p>
      </div>
    </footer>
  );
}
