import Link from "next/link";
import { companyInfo } from "@/data/site-content";

function BrandMark() {
  return (
    <img
      src="/tks-logo.svg"
      alt="TKS Solar logo"
      className="h-9 w-9 rounded-full border border-[#F5A900]/60 bg-[#081A2F] object-cover shadow-[0_0_20px_rgba(245,169,0,0.15)]"
    />
  );
}

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#051423] text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-[1.3fr_0.9fr_0.9fr_1.1fr]">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <BrandMark />
              <div>
                <div className="text-lg font-black tracking-wider text-white">TKS</div>
                <div className="text-[0.6rem] font-bold uppercase tracking-widest text-slate-400">Solar</div>
              </div>
            </div>
            <p className="max-w-xs text-sm leading-6 text-slate-400">{companyInfo.tagline}</p>
            <p className="mt-4 text-xs uppercase tracking-wider text-slate-500">{companyInfo.legalName}</p>
          </div>

          <div>
            <h3 className="text-eyebrow mb-6">Solutions</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/" className="transition-colors hover:text-[#F5A900]">Home</Link></li>
              <li><Link href="/our-work" className="transition-colors hover:text-[#F5A900]">Our Work</Link></li>
              <li><Link href="/about-solar" className="transition-colors hover:text-[#F5A900]">About Solar</Link></li>
              <li><Link href="/government-schemes" className="transition-colors hover:text-[#F5A900]">Schemes</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-eyebrow mb-6">Offices</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <span className="block text-slate-500">Head Office</span>
                <span className="block text-slate-300">{companyInfo.headOffice}</span>
              </li>
              <li>
                <span className="block text-slate-500">Service Office</span>
                <span className="block text-slate-300">{companyInfo.serviceOffice}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-eyebrow mb-6">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <span className="block text-slate-500 mb-2">Phone</span>
                <a href="tel:+919805252222" className="block text-slate-300 transition-colors hover:text-[#F5A900]">{companyInfo.phone[0]}</a>
                <a href="tel:+919816418318" className="block text-slate-300 transition-colors hover:text-[#F5A900]">{companyInfo.phone[1]}</a>
              </li>
              <li>
                <span className="block text-slate-500 mb-2">Email</span>
                <a href={`mailto:${companyInfo.email}`} className="block text-slate-300 transition-colors hover:text-[#F5A900]">{companyInfo.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-xs uppercase tracking-wider text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} TKS Works and Supplies Pvt. Ltd. All rights reserved.</p>
          <p className="text-[#F5A900] font-semibold">Powering Progress Sustainably</p>
        </div>
      </div>
    </footer>
  );
}
