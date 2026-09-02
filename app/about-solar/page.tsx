"use client";

import { ArrowLeft, ArrowRight, ChevronRight, Gauge, ShieldCheck, SunMedium, Wrench } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { solutions } from "@/data/site-content";

const featurePoints = [
  {
    title: "Harness solar energy",
    description: "Capture clean generation at the source to support modern energy demand.",
    icon: SunMedium,
  },
  {
    title: "Build long-term infrastructure",
    description: "Develop energy assets designed for performance, resilience and reliability.",
    icon: Gauge,
  },
  {
    title: "Reduce dependence on conventional power",
    description: "Shift toward diversified, dependable generation designed for current needs.",
    icon: ShieldCheck,
  },
  {
    title: "Move toward cleaner energy",
    description: "Support sustainable power deployment through engineering-led execution.",
    icon: Wrench,
  },
];

const solutionLabels: Record<string, string> = {
  "Residential Solar": "POWER FOR EVERYDAY LIVING",
  "Commercial Rooftop Solar": "ENERGY FOR BUSINESS",
  "Industrial Rooftop Solar": "POWERING INDUSTRY",
  "Ground-Mounted Solar Plants": "SOLAR AT SCALE",
};

export default function AboutSolarPage() {
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
              <span className="hero-headline block">Explore</span>
              <span className="hero-line-gold mt-2 block">Solar Energy.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-slate-200 sm:text-xl sm:leading-8">
              Understand solar solutions, benefits and why solar energy is right for your energy needs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F7F4] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Solar Solutions"
            title="Solar Solutions Built for Every Scale."
            text="From homes to large ground-mounted infrastructure, our solutions are designed for dependable energy delivery and long-term performance."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {solutions.map((solution, index) => (
              <article
                key={solution.title}
                className={`group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-[#081A2F] shadow-[0_32px_70px_rgba(8,26,47,0.12)] ${
                  index === 1 || index === 2 ? "lg:translate-y-4" : ""
                }`}
              >
                <div className="relative h-[430px] overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081A2F]/90 via-[#081A2F]/25 to-[#081A2F]/10" />
                  <div className="absolute left-5 top-5 inline-flex items-center rounded-full border border-white/15 bg-[#081A2F]/35 px-3 py-1.5 text-[0.64rem] font-medium uppercase tracking-[0.24em] text-white/90 backdrop-blur-sm">
                    {solutionLabels[solution.title] ?? "SOLAR ENERGY"}
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-[-0.06em]">{solution.title}</h3>
                      <p className="mt-2 max-w-md text-sm leading-6 text-slate-200">{solution.description}</p>
                    </div>
                    <Link
                      href="/start-project"
                      className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/15"
                      aria-label={`Explore ${solution.title}`}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EDE7D7] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="relative overflow-hidden rounded-[2rem] border border-[#D9D0BA] bg-[#081A2F] shadow-[0_25px_60px_rgba(8,26,47,0.12)]">
              <img
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=80"
                alt="Solar energy infrastructure"
                className="h-full min-h-[360px] w-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081A2F] via-[#081A2F]/15 to-[#081A2F]/5" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="text-[0.62rem] font-medium uppercase tracking-[0.28em] text-[#F5A900]">Future Ready</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.07em] text-white sm:text-4xl">
                  THE ENERGY IS ALREADY HERE.
                </h2>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {featurePoints.map(({ title, description, icon: Icon }) => (
                <div key={title} className="rounded-[1.5rem] border border-[#D9D0BA] bg-[#F7F7F4] p-5 shadow-[0_18px_40px_rgba(8,26,47,0.04)]">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#081A2F] text-[#F5A900]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-[-0.04em] text-[#081A2F]">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#081A2F] py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[#081A2F] via-[#0f2d4a]/50 to-[#051423]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,169,0,0.12),transparent_50%)]" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-white/6 p-12 backdrop-blur-xl sm:p-16 lg:p-20">
            <div className="max-w-3xl">
              <p className="text-eyebrow mb-6">Ready to Harness Solar Energy?</p>
              <h2 className="mb-6 text-5xl font-bold tracking-[-0.02em] text-white sm:text-6xl lg:text-7xl">
                Start Your
                <span className="block text-[#F5A900]">Solar Project</span>
              </h2>
              <p className="mb-10 text-xl leading-8 text-slate-300">
                Discover how solar energy can power your property sustainably and cost-effectively.
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
