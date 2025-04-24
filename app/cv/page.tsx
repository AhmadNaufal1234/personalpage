// app/page.tsx
import { Metadata } from "next";
import ClientCV from "./ClientCV";

export const metadata: Metadata = {
  title: "CV | FallDeveloper",
  description: "Halaman CV FallDeveloper",
};

export default function Home() {
  return <ClientCV />;
}
