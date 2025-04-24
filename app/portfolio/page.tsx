// app/page.tsx
import { Metadata } from "next";
import ClientPortfolio from "./ClientPortfolio";

export const metadata: Metadata = {
  title: "Portfolio | FallDeveloper",
  description: "Portfolio FallDeveloper.",
};

export default function Home() {
  return <ClientPortfolio />;
}
