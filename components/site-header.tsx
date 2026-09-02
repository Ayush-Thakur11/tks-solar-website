"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navItems } from "@/data/site-content";

function BrandMark() {
  return (
    <img
      src="/tks-logo.svg"
      alt="TKS Solar logo"
      className="h-9 w-9 rounded-full border border-[#F5A900]/60 bg-[#081A2F] object-cover shadow-[0_0_24px_rgba(245,169,0,0.18)]"
    />
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "border-b border-white/8 bg-[#081A2F]/92 shadow-lg backdrop-blur-xl" 
          : "border-b border-white/5 bg-[#081A2F]/60 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-white transition-opacity hover:opacity-80">
          <BrandMark />
          <div>
            <div className="text-base font-black tracking-wider text-white drop-shadow-[0_0_16px_rgba(245,169,0,0.1)]">TKS</div>
            <div className="text-[0.6rem] font-bold uppercase tracking-widest text-slate-300">Solar</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative transition-colors duration-200 after:absolute after:-bottom-2.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[#F5A900] after:transition-transform after:duration-300 hover:text-white hover:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/start-project"
            className="btn-primary px-6 py-2.5 text-sm font-semibold"
          >
            Start Your Project
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle mobile navigation"
          onClick={() => setMobileOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-all hover:bg-white/8 md:hidden"
        >
          <span className="sr-only">Open menu</span>
          <span className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 rounded-full bg-white transition-all" />
            <span className="block h-0.5 w-5 rounded-full bg-white transition-all" />
            <span className="block h-0.5 w-5 rounded-full bg-white transition-all" />
          </span>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/8 bg-[#081A2F]/98 backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-sm font-medium text-slate-200">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-2.5 transition-all hover:bg-white/8 hover:text-[#F5A900]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/start-project"
              onClick={() => setMobileOpen(false)}
              className="btn-primary mt-4 flex items-center justify-center px-6 py-3 font-semibold"
            >
              Start Your Project
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
