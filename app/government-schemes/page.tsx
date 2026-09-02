"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { schemes, serviceRegions } from "@/data/site-content";

export default function GovernmentSchemesPage() {
  return (
    <main className="bg-[#F7F7F4] text-[#081A2F] selection:bg-[#F5A900]/25">
      <SiteHeader />

      <section className="relative isolate min-h-screen overflow-hidden bg-[#081A2F] pt-32 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1800&q=80"
            alt="Solar power infrastructure"
            className="h-full w-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,169,0,0.16),transparent_35%),linear-gradient(90deg,rgba(8,26,47,0.88),rgba(8,26,47,0.58))]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-slate-200 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="max-w-3xl py-20">
            <h1 className="hero-glow-wrap max-w-2xl text-5xl font-semibold leading-[0.86] tracking-[-0.09em] text-white sm:text-6xl lg:text-7xl">
              <span className="hero-headline block">Government</span>
              <span className="hero-line-gold mt-2 block">Schemes & Opportunities.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-slate-200 sm:text-xl sm:leading-8">
              Explore available solar opportunities and government-backed schemes designed to support your transition to renewable energy.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#EDE7D7] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Government Schemes"
            title="Explore Available Solar Opportunities"
            text="Depending on the project type, location and eligibility, applicable government programmes and incentives may be available. TKS can help you understand the relevant process and project requirements."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-2">
            {schemes.map((scheme) => (
              <div key={scheme.name} className="rounded-[1.5rem] border border-[#D9D0BA] bg-[#F7F7F4] p-6 shadow-[0_18px_40px_rgba(8,26,47,0.04)]">
                <h3 className="text-lg font-semibold tracking-[-0.05em] text-[#081A2F]">{scheme.name}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{scheme.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] border border-[#D9D0BA] bg-white p-6 sm:p-8">
            <p className="text-sm leading-7 text-slate-600">
              <span className="font-semibold text-[#081A2F]">Scheme Disclaimer:</span> Scheme benefits, subsidy amounts, eligibility, metering arrangements and applicable regulations are subject to current Government of India, State Government, MNRE, DISCOM and regulatory guidelines. Please verify current eligibility and benefits before making an investment decision.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F7F4] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-[#B8891C]">Where We Build</p>
            <h2 className="text-3xl font-semibold tracking-[-0.06em] text-[#081A2F] sm:text-4xl lg:text-5xl">
              Delivering solar and engineering solutions across key regions in North India.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {serviceRegions.map((region, index) => (
              <div
                key={region}
                className={`group relative overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-[0_20px_40px_rgba(8,26,47,0.04)] transition-all duration-200 hover:-translate-y-1 ${
                  index === 1 ? "md:translate-y-3" : ""
                }`}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F5A900] to-transparent opacity-80" />
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#F5A900]/8 blur-2xl" />
                <div className="relative text-[2.2rem] font-semibold tracking-[-0.08em] text-[#081A2F] sm:text-[2.8rem]">{region}</div>
                <div className="relative mt-4 h-px w-14 bg-slate-200" />
                <p className="relative mt-4 text-sm uppercase tracking-[0.22em] text-slate-500">Regional delivery</p>
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
              <p className="text-eyebrow mb-6">Ready to Proceed?</p>
              <h2 className="mb-6 text-5xl font-bold tracking-[-0.02em] text-white sm:text-6xl lg:text-7xl">
                Start Your
                <span className="block text-[#F5A900]">Solar Project</span>
              </h2>
              <p className="mb-10 text-xl leading-8 text-slate-300">
                Our team can help you understand available opportunities and explore the best solution for your energy needs.
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
