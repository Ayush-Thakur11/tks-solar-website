"use client";

import { ArrowLeft, ArrowRight, ChevronRight, MapPin } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  capabilities,
  projectCards,
  processSteps,
  stats,
  strengths,
} from "@/data/site-content";

export default function OurWorkPage() {
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
              <span className="hero-headline block">Our Work.</span>
              <span className="hero-line-gold mt-2 block">Why TKS Solar.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-slate-200 sm:text-xl sm:leading-8">
              Professional engineering, proven delivery, and engineering excellence across projects of every scale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F7F4] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-3xl">
            <p className="text-eyebrow mb-3">Built on Excellence</p>
            <h2 className="text-4xl font-bold tracking-[-0.02em] text-[#081A2F] sm:text-5xl lg:text-6xl">
              Proven Track Record.
            </h2>
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

      <section className="bg-[#F7F7F4] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-[#B8891C]">SELECTED CAPABILITIES</p>
              <h2 className="text-3xl font-semibold tracking-[-0.06em] text-[#081A2F] sm:text-4xl lg:text-5xl">
                Built in the Real World.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
                Engineering infrastructure designed and delivered for real-world energy needs.
              </p>
            </div>
            <Link
              href="/start-project"
              className="inline-flex items-center gap-2 self-start rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-[#081A2F] transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50"
            >
              Start Your Project
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mb-8 flex flex-wrap items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-3 shadow-[0_18px_40px_rgba(8,26,47,0.03)]">
            <span className="text-3xl font-semibold tracking-[-0.08em] text-[#081A2F] sm:text-5xl">10 MW</span>
            <span className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[#B8891C]">Largest Ground-Mounted Solar Project</span>
          </div>

          <div className="grid gap-6 xl:grid-cols-3">
            {projectCards.map((project, index) => (
              <article
                key={project.title + project.projectType}
                className={`group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_28px_60px_rgba(8,26,47,0.06)] transition-all duration-200 hover:-translate-y-1 ${
                  index === 0 ? "xl:col-span-1" : ""
                } ${index === 1 ? "xl:translate-y-3" : ""} ${index === 2 ? "xl:-translate-y-2" : ""}`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081A2F]/90 via-[#081A2F]/15 to-transparent" />
                  <div className="absolute left-5 top-5 inline-flex items-center rounded-full border border-white/15 bg-[#081A2F]/30 px-3 py-1.5 text-[0.64rem] font-medium uppercase tracking-[0.22em] text-white/90 backdrop-blur-sm">
                    {project.projectType.toUpperCase()}
                  </div>
                </div>
                <div className="space-y-4 p-6">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.05em] text-[#081A2F]">{project.title}</h3>
                    <p className="mt-2 text-sm text-slate-500">{project.projectType}</p>
                  </div>
                  <div className="space-y-3 border-t border-slate-200 pt-4 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-[#B8891C]" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#F5A900]" />
                      <span>{project.capacity}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F7F4] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            <SectionHeading
              eyebrow="Our Process"
              title="Engineering From Start to Finish."
              text="Our approach combines site understanding, engineering discipline, procurement control and professional execution to deliver dependable solar and electrical infrastructure."
            />
          </div>
          <div className="mb-6 inline-flex items-center rounded-full border border-[#081A2F]/10 bg-white px-4 py-2 text-[0.62rem] font-medium uppercase tracking-[0.28em] text-[#081A2F] shadow-[0_10px_30px_rgba(8,26,47,0.04)]">
            ENGINEERED FROM START TO FINISH
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {processSteps.map((step) => (
              <div key={step.number} className="group rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(8,26,47,0.03)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(8,26,47,0.08)]">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-3xl font-semibold tracking-[-0.08em] text-[#081A2F]">{step.number}</span>
                  <span className="h-px flex-1 bg-slate-200" />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-[-0.04em] text-[#081A2F]">{step.title}</h3>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-[2rem] border border-slate-200 bg-[#081A2F] p-6 text-white sm:p-8 lg:p-10">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {strengths.map((strength) => (
                <div key={strength} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-slate-100">
                  {strength}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#081A2F] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Engineering Beyond Solar"
            title="Engineering Beyond Solar."
            text="Our work extends beyond generation into power infrastructure, storage and maintenance services that support long-term operational reliability."
            dark
          />

          <div className="mt-12 grid gap-5 xl:grid-cols-2">
            {capabilities.map((item) => (
              <div key={item.id} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-white shadow-[0_18px_40px_rgba(0,0,0,0.12)] transition-all duration-200 hover:border-[#F5A900]/40 hover:bg-white/[0.06]">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-2xl font-semibold tracking-[-0.05em]">{item.title}</h3>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#F5A900]/15 text-[#F5A900]">+</span>
                </div>
                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">{item.shortText}</p>
                <ul className="mt-5 space-y-3 text-sm text-slate-200">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-[#F5A900]" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F7F4] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-[#081A2F] shadow-[0_28px_60px_rgba(8,26,47,0.12)]">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80"
                alt="Engineering team discussion"
                className="h-full min-h-[420px] w-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081A2F]/85 via-[#081A2F]/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-[0.62rem] font-medium uppercase tracking-[0.28em] text-[#F5A900]">ENGINEERED FROM START TO FINISH</p>
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-[#B8891C]">About TKS</p>
              <h2 className="text-3xl font-semibold tracking-[-0.06em] text-[#081A2F] sm:text-4xl lg:text-5xl">
                Professional Engineering. Reliable Delivery.
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-700">
                TKS Solar is a professional Engineering, Procurement & Construction company specializing in renewable energy solar power systems, electrical contracting and power infrastructure. The company delivers complete turnkey engineering and installation solutions across residential, commercial, industrial and government sectors.
              </p>

              <div className="mt-8 space-y-6">
                <div className="rounded-[1.4rem] border border-slate-200 bg-white p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#B8891C]">Mission</p>
                  <p className="mt-3 text-base leading-7 text-slate-700">
                    To deliver reliable, efficient and sustainable energy solutions through professional engineering, quality equipment and end-to-end EPC services — empowering clients with clean energy infrastructure built to last.
                  </p>
                </div>
                <div className="rounded-[1.4rem] border border-slate-200 bg-white p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#B8891C]">Vision</p>
                  <p className="mt-3 text-base leading-7 text-slate-700">
                    To be a trusted and recognized EPC partner in renewable energy and electrical infrastructure, known for engineering excellence, safety and long-term client relationships across India.
                  </p>
                </div>
              </div>
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
              <p className="text-eyebrow mb-6">Ready to Proceed?</p>
              <h2 className="mb-6 text-5xl font-bold tracking-[-0.02em] text-white sm:text-6xl lg:text-7xl">
                Start Your
                <span className="block text-[#F5A900]">Solar Project</span>
              </h2>
              <p className="mb-10 text-xl leading-8 text-slate-300">
                Our team is ready to help you explore the right solution for your energy infrastructure needs.
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
