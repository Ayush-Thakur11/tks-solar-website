"use client";

import { ArrowRight, Landmark, SunMedium, Zap } from "lucide-react";
import Link from "next/link";
import { CountUp } from "@/components/count-up";
import { ElectricityFlow } from "@/components/electricity-flow";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const generationCards = [
  { size: "3 kW", low: 3900, high: 5100, unit: "units/year", decimals: 0, featured: false },
  { size: "5 kW", low: 6500, high: 8500, unit: "units/year", decimals: 0, featured: false },
  { size: "10 kW", low: 13000, high: 17000, unit: "units/year", decimals: 0, featured: false },
  { size: "100 kW", low: 1.3, high: 1.7, unit: "lakh units/year", decimals: 1, featured: false },
  { size: "1 MW", low: 13, high: 17, unit: "lakh units/year", decimals: 0, featured: true },
];

function Accent({ children }: { children: React.ReactNode }) {
  return <span className="gold-underline font-semibold text-[#C4890A]">{children}</span>;
}

function DarkAccent({ children }: { children: React.ReactNode }) {
  return <span className="gold-highlight font-semibold">{children}</span>;
}

export function EarnWithSolarPage() {
  return (
    <main className="bg-[#F7F7F4] text-[#081A2F] selection:bg-[#F5A900]/25">
      <SiteHeader />

      <section className="relative isolate min-h-screen overflow-hidden bg-[#081A2F] pt-28 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1800&q=80"
            alt="Sunlight across a solar landscape"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,169,0,0.2),transparent_38%),linear-gradient(180deg,rgba(8,26,47,0.78),rgba(5,20,35,0.94))]" />
        </div>

        <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl flex-col justify-center px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-eyebrow mb-8">Sunlight. Space. Financial value.</p>
          <h1 className="hero-glow-wrap max-w-5xl text-5xl font-semibold leading-[0.92] tracking-[-0.07em] text-white sm:text-6xl lg:text-8xl">
            <span className="hero-headline block">
              Turn Sunlight Into <span className="hero-line-gold">Savings</span>
            </span>
            <span className="mt-3 block text-white/95">
              — And Your <span className="hero-line-gold">Land</span> Into an{" "}
              <span className="hero-line-gold">Asset</span>
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-slate-200 sm:text-xl sm:leading-9">
            <DarkAccent>Solar</DarkAccent> isn&apos;t just about generating{" "}
            <DarkAccent>electricity</DarkAccent>. The right solar project can turn your roof, business or
            suitable <DarkAccent>land</DarkAccent> into a long-term energy and financial{" "}
            <DarkAccent>asset</DarkAccent>.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="#explore-opportunity" className="btn-primary group px-8 py-4 text-base font-semibold">
              Explore Your Solar Opportunity
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <Link href="/start-project" className="btn-secondary px-8 py-4 text-base font-semibold">
              Start Your Solar Project
            </Link>
          </div>

          <div className="mt-16">
            <ElectricityFlow />
          </div>
        </div>
      </section>

      <section id="explore-opportunity" className="scroll-mt-24 bg-[#F7F7F4] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <p className="text-eyebrow mb-5">From expense to asset</p>
              <h2 className="text-4xl font-bold tracking-[-0.04em] text-[#081A2F] sm:text-5xl lg:text-6xl">
                Your <Accent>Electricity</Accent> Bill Doesn&apos;t Have to Be an Expense Forever.
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-slate-600">
              What if the roof over your head could produce the <Accent>electricity</Accent> your home or business
              uses?
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Generate",
                copy: "A solar system produces electricity directly from sunlight during the day — for your home, office, shop, factory or other loads.",
              },
              {
                title: "Use & export",
                copy: "When your system produces more than you are using, surplus electricity may be exported to the grid under applicable state regulations and metering.",
              },
              {
                title: "Keep more value",
                copy: "The result can be lower electricity purchases, reduced monthly bills and greater energy independence.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="card-premium relative overflow-hidden p-8"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F5A900] to-transparent" />
                <p className="text-eyebrow mb-4">{item.title}</p>
                <p className="text-base leading-7 text-slate-600">{item.copy}</p>
              </article>
            ))}
          </div>

          <p className="mt-10 max-w-3xl text-lg leading-8 text-slate-700">
            With the right-sized system and consumption pattern, <Accent>solar</Accent> can substantially reduce
            your electricity costs.
          </p>
        </div>
      </section>

      <section className="bg-[#EDE7D7] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-eyebrow mb-5">Every unit has value</p>
            <h2 className="text-4xl font-bold tracking-[-0.04em] text-[#081A2F] sm:text-5xl lg:text-6xl">
              Every Unit Your <Accent>Solar</Accent> Plant Generates Has <Accent>Value</Accent>.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Solar doesn&apos;t just sit on your roof — it produces measurable <Accent>electricity</Accent>.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Electricity generation is measured in units (kWh). As a planning estimate,{" "}
              <span className="font-semibold text-[#081A2F]">1 kW</span> of well-designed solar can generate roughly{" "}
              <span className="font-semibold text-[#C4890A]">1,300–1,700 units per year</span>, depending on location,
              sunlight, orientation, shading, system design and weather.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
            {generationCards.map((card) => (
              <article
                key={card.size}
                className={`relative overflow-hidden rounded-[1.75rem] border p-6 shadow-[0_18px_40px_rgba(8,26,47,0.06)] ${
                  card.featured
                    ? "border-[#F5A900]/40 bg-[#081A2F] text-white sm:col-span-2 xl:col-span-1"
                    : "border-[#D9D0BA] bg-[#F7F7F4]"
                }`}
              >
                <p className={`text-eyebrow mb-6 ${card.featured ? "text-[#F5A900]" : ""}`}>{card.size}</p>
                <p className={`text-3xl font-bold tracking-[-0.05em] sm:text-4xl ${card.featured ? "text-white" : "text-[#081A2F]"}`}>
                  ~
                  <CountUp value={card.low} decimals={card.decimals} />
                  –
                  <CountUp value={card.high} decimals={card.decimals} />
                </p>
                <p className={`mt-3 text-sm ${card.featured ? "text-slate-300" : "text-slate-500"}`}>{card.unit}</p>
                <p className={`mt-6 text-[0.68rem] uppercase tracking-[0.16em] ${card.featured ? "text-[#F5A900]/80" : "text-slate-400"}`}>
                  Planning range
                </p>
              </article>
            ))}
          </div>

          <p className="mt-8 text-sm leading-6 text-slate-500">
            Illustrative planning ranges only. Actual generation depends on site conditions, equipment, system design
            and weather.
          </p>
        </div>
      </section>

      <section className="bg-[#F7F7F4] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-eyebrow mb-5">The bigger opportunity</p>
            <h2 className="text-4xl font-bold tracking-[-0.04em] text-[#081A2F] sm:text-5xl lg:text-6xl">
              Solar Can <Accent>Save</Accent> Money First — And Larger Projects Can Create{" "}
              <Accent>Revenue</Accent>.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_50px_rgba(8,26,47,0.05)] sm:p-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#081A2F] text-[#F5A900]">
                <SunMedium className="h-5 w-5" />
              </div>
              <p className="text-eyebrow mb-3">Rooftop systems</p>
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[#081A2F]">
                Savings through avoided purchases
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                For a rooftop system, the primary financial benefit is usually avoided{" "}
                <Accent>electricity</Accent> purchases: the solar power you consume reduces the number of units you
                need to buy from the distribution company.
              </p>
            </article>
            <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_50px_rgba(8,26,47,0.05)] sm:p-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#081A2F] text-[#F5A900]">
                <Landmark className="h-5 w-5" />
              </div>
              <p className="text-eyebrow mb-3">Larger projects</p>
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[#081A2F]">
                Revenue through approved arrangements
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                For eligible larger grid-connected solar projects, electricity may instead be supplied through an
                applicable PPA, tariff, open-access or other approved arrangement.
              </p>
            </article>
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-[#E4D9BE] bg-[#EDE7D7]/70 px-6 py-5">
            <p className="text-sm leading-7 text-slate-600">
              There is no single universal “government rate”. The applicable commercial structure depends on the
              project model, state regulations, DISCOM/PPA terms and applicable tariff. No tariff on this page is a
              guaranteed rate.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#081A2F] py-24 text-white sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,169,0,0.16),transparent_46%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-eyebrow mb-5">The land opportunity</p>
            <h2 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              What Could <DarkAccent>1 MW</DarkAccent> Mean for Your <DarkAccent>Land</DarkAccent>?
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              One megawatt isn&apos;t just a number — it can represent millions of units of clean{" "}
              <DarkAccent>electricity</DarkAccent> over the life of a project.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-400">
              As an illustration, if a 1 MW plant generates around 13–17 lakh units per year, its gross electricity
              value can be significant depending on the applicable sale price or electricity arrangement.
            </p>
          </div>

          <p className="mt-12 text-sm uppercase tracking-[0.22em] text-[#F5A900]/80">
            Illustrative example only · assumed value ₹3.45/unit · not a promised tariff
          </p>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm sm:p-10">
              <p className="text-eyebrow mb-4">1 MW · lower range</p>
              <p className="text-sm text-slate-400">13 lakh units × ₹3.45</p>
              <p className="mt-4 text-5xl font-bold tracking-[-0.05em] text-[#F5A900] sm:text-6xl">
                ₹<CountUp value={44.9} decimals={1} /> lakh
                <span className="mt-2 block text-lg font-medium tracking-normal text-slate-300">/year</span>
              </p>
              <p className="mt-5 text-sm text-slate-500">Gross electricity value · illustration</p>
            </article>
            <article className="rounded-[2rem] border border-[#F5A900]/30 bg-gradient-to-br from-white/8 to-transparent p-8 sm:p-10">
              <p className="text-eyebrow mb-4">1 MW · upper range</p>
              <p className="text-sm text-slate-400">17 lakh units × ₹3.45</p>
              <p className="mt-4 text-5xl font-bold tracking-[-0.05em] text-[#F5A900] sm:text-6xl">
                ₹<CountUp value={58.7} decimals={1} /> lakh
                <span className="mt-2 block text-lg font-medium tracking-normal text-slate-300">/year</span>
              </p>
              <p className="mt-5 text-sm text-slate-500">Gross electricity value · illustration</p>
            </article>
          </div>

          <div className="mt-6 rounded-[2rem] border border-white/10 bg-[#051423]/70 p-8 sm:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-eyebrow mb-4">2 MW illustration</p>
                <p className="max-w-xl text-base leading-7 text-slate-400">
                  At the same assumed ₹3.45/unit example, a 2 MW project could represent approximately this range of
                  gross electricity value.
                </p>
              </div>
              <p className="text-4xl font-bold tracking-[-0.05em] text-white sm:text-5xl">
                ₹<CountUp value={89.7} decimals={1} /> lakh
                <span className="mx-3 text-[#F5A900]">–</span>
                ₹<CountUp value={1.17} decimals={2} /> crore
                <span className="mt-2 block text-base font-medium tracking-normal text-slate-400">/year, gross</span>
              </p>
            </div>
          </div>

          <div className="mt-8 flex gap-3 rounded-[1.5rem] border border-white/10 px-5 py-4 text-sm leading-7 text-slate-400">
            <Zap className="mt-1 h-4 w-4 shrink-0 text-[#F5A900]" />
            <p>
              This is <span className="text-white">gross electricity value</span> before O&amp;M, financing, taxes,
              degradation, transmission/wheeling charges, curtailment and other project-specific costs. It is not
              guaranteed income. ₹3.45/unit is an assumed example for illustration — not a government purchase
              commitment or promised tariff.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#EDE7D7] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-eyebrow mb-5">Make your space work</p>
              <h2 className="text-4xl font-bold tracking-[-0.04em] text-[#081A2F] sm:text-5xl lg:text-6xl">
                Your Unused Roof or <Accent>Land</Accent> Could Be Working for You.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Instead of looking at <Accent>solar</Accent> as an expense, look at it as an{" "}
                <Accent>asset</Accent> that can keep producing <Accent>value</Accent> from the same space.
              </p>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Whether you want to reduce your home&apos;s electricity bill, power a business, use an industrial
                rooftop or explore a larger ground-mounted solar project, the opportunity starts with understanding
                one thing:
              </p>
              <blockquote className="mt-8 border-l-2 border-[#F5A900] pl-6 text-2xl font-semibold tracking-[-0.04em] text-[#081A2F] sm:text-3xl">
                How much <span className="text-[#C4890A]">electricity</span> can this location produce — and what is
                that electricity <span className="text-[#C4890A]">worth</span>?
              </blockquote>
            </div>
            <div className="rounded-[2rem] border border-[#D9D0BA] bg-[#F7F7F4] p-8 shadow-[0_24px_50px_rgba(8,26,47,0.06)] sm:p-10">
              <p className="text-eyebrow mb-4">With TKS Solar</p>
              <p className="text-lg leading-8 text-slate-600">
                TKS Solar can help evaluate the site, system size, expected generation and suitable solar solution so
                you can make decisions with numbers — not guesswork.
              </p>
              <Link
                href="/start-project"
                className="btn-primary mt-8 inline-flex px-7 py-3.5 text-sm font-semibold"
              >
                Start with a site conversation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#081A2F] py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[#081A2F] via-[#0f2d4a]/50 to-[#051423]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,169,0,0.12),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-white/6 p-12 backdrop-blur-xl sm:p-16 lg:p-20">
            <p className="text-eyebrow mb-6">Begin the conversation</p>
            <h2 className="mb-6 text-4xl font-bold tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
              Your Land Is Already There.
              <span className="mt-2 block text-[#F5A900]">Your Roof Is Already There.</span>
            </h2>
            <p className="mb-10 max-w-xl text-xl leading-8 text-slate-300">Let the sun start working for you.</p>
            <Link
              href="/start-project"
              className="btn-primary group inline-flex px-8 py-4 text-base font-semibold"
            >
              Discuss Your Solar Opportunity
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
