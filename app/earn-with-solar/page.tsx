import type { Metadata } from "next";
import { EarnWithSolarPage } from "@/components/earn-with-solar-page";

export const metadata: Metadata = {
  title: "Earn with Solar | TKS Solar",
  description:
    "See how sunlight, rooftops and land can become long-term energy and financial assets — with illustrative generation and value ranges, not guaranteed returns.",
};

export default function Page() {
  return <EarnWithSolarPage />;
}
