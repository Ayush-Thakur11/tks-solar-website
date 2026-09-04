import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tkssolar.in"),

  title: {
    default: "TKS Solar | Solar EPC & Renewable Energy Solutions",
    template: "%s | TKS Solar",
  },

  description:
    "TKS Solar is a solar EPC and electrical infrastructure company based in Chandigarh, delivering residential, commercial, industrial and ground-mounted solar solutions across Himachal Pradesh and North India.",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "TKS Solar | Solar EPC & Renewable Energy Solutions",
    description:
      "Reliable solar EPC and electrical infrastructure solutions for residential, commercial and industrial projects.",
    url: "https://tkssolar.in",
    siteName: "TKS Solar",
    type: "website",
    locale: "en-IN",
  },

  twitter: {
    card: "summary",
    title: "TKS Solar | Solar EPC & Renewable Energy Solutions",
    description:
      "Reliable solar EPC and electrical infrastructure solutions from TKS Solar.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#F7F7F4] text-[#081A2F]">
        {children}
      </body>
    </html>
  );
}