import type { Metadata } from "next";
import CookiesClient from "./CookiesClient";

export const metadata: Metadata = {
  title: "Cookie Settings | Valle de la Luna Travel Guide",
  description: "Manage your cookie preferences",
};

export default function CookiesPage() {
  return <CookiesClient />;
}
