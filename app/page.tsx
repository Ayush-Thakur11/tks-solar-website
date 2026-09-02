"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { companyInfo, credibilityPillars, stats } from "@/data/site-content";

export default function Home() {

  return (
    <main className="bg-[#F7F7F4] text-[#081A2F] selection:bg-[#F5A900]/25">
      <SiteHeader />

      <section className="relative isolate min-h-screen overflow-hidden bg-[#081A2F] text-white pt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1800&q=80"
            alt="Solar power infrastructure"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#081A2F]/92 via-[#081A2F]/88 to-[#051423]/90" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,169,0,0.12),transparent_55%)]" />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-8 flex flex-col items-start gap-4">
              <div className="inline-flex items-center rounded-full border border-[#F5A900]/50 bg-white/6 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[#F5A900] backdrop-blur-sm">
                {companyInfo.legalName}
              </div>
              <div className="flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.3em] text-slate-300">
                <span className="h-px w-10 bg-[#F5A900]/70" />
                <span>TKS SOLAR</span>
              </div>
              <div className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-slate-400">
                ENGINEERING THE ENERGY FUTURE
              </div>
            </div>

            <h1 className="hero-glow-wrap max-w-3xl text-6xl font-bold leading-[0.95] tracking-[-0.02em] text-white sm:text-7xl lg:text-8xl xl:text-8xl">
              <span className="hero-headline block">Powering Progress.</span>
              <span className="hero-line-gold mt-3 block">Sustainably.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
              Professional solar EPC and electrical infrastructure solutions engineered for projects of every scale. From concept to operation, we deliver excellence.
            </p>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <Link
                href="/start-project"
                className="btn-primary group flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold"
              >
                Start Your Solar Project
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-3">
                <Link
                  href="/our-work"
                  className="btn-secondary flex items-center justify-center px-8 py-4 text-base font-semibold"
                >
                  Explore Our Work
                </Link>
                <Link
                  href="/about-solar"
                  className="btn-secondary flex items-center justify-center px-8 py-4 text-base font-semibold"
                >
                  About Solar
                </Link>
                <Link
                  href="/government-schemes"
                  className="btn-secondary flex items-center justify-center px-8 py-4 text-base font-semibold"
                >
                  Schemes & Incentives
                </Link>
              </div>
            </div>

            <div className="mt-16 flex items-center gap-8 border-t border-white/10 pt-8 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#F5A900]" />
                <span>Licensed Electrical Contractor</span>
              </div>
              <div className="hidden items-center gap-2 sm:flex">
                <div className="h-2 w-2 rounded-full bg-[#F5A900]" />
                <span>Government Registered EPC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#081A2F]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-y border-white/8 py-8">
            <div className="mb-6 flex flex-wrap items-center gap-4 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-slate-400">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F5A900]" />
                <span>Established <span className="text-[#F5A900]">2018</span></span>
              </span>
              <span className="hidden h-4 w-px bg-white/10 sm:block" />
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F5A900]" />
                <span>Engineering-led Delivery</span>
              </span>
              <span className="hidden h-4 w-px bg-white/10 lg:block" />
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F5A900]" />
                <span>Professional EPC Execution</span>
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              {credibilityPillars.map((item) => (
                <span
                  key={item}
                  className="inline-block rounded-full border border-white/15 bg-white/6 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-slate-300 backdrop-blur-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F7F4] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-3xl">
            <p className="text-eyebrow mb-3">Built on Excellence</p>
            <h2 className="text-4xl font-bold tracking-[-0.02em] text-[#081A2F] sm:text-5xl lg:text-6xl">
              Proven in the Field.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our track record speaks for itself. Decades of combined experience delivering large-scale solar and electrical infrastructure projects.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="card-premium group relative overflow-hidden"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F5A900] to-transparent opacity-60" />
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#F5A900]/8 blur-3xl transition-all group-hover:bg-[#F5A900]/12" />
                
                <div className="relative p-8">
                  <p className="text-eyebrow mb-4">{item.label.split(" ").slice(-1)[0] === "Project" || item.label.includes("Projects") ? "Track Record" : item.label.includes("Established") ? "Since" : "Capacity"}</p>
                  <div className="mb-4 text-5xl font-bold tracking-[-0.02em] text-[#081A2F] sm:text-6xl">
                    {item.value}
                  </div>
                  <p className="text-base leading-7 text-slate-700 font-medium">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#081A2F] py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[#081A2F] via-[#0f2d4a]/50 to-[#051423]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,169,0,0.12),transparent_50%)]" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-white/6 p-12 backdrop-blur-xl sm:p-16 lg:p-20">
            <div className="max-w-3xl">
              <p className="text-eyebrow mb-6">Next Steps</p>
              <h2 className="mb-6 text-5xl font-bold tracking-[-0.02em] text-white sm:text-6xl lg:text-7xl">
                Ready to Begin
                <span className="block text-[#F5A900]">Your Solar Journey?</span>
              </h2>
              <p className="mb-10 text-xl leading-8 text-slate-300">
                Our team is ready to help you explore the perfect solar solution for your needs. Begin your complimentary 4-step consultation process today.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/start-project"
                className="btn-primary group flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold"
              >
                Start Your Project
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <p className="text-sm text-slate-400">
                Free consultation • No obligation
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
