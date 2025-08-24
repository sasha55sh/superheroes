import CatalogSection from "@/app/sections/catalog-page/CatalogSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Superheroes - Catalog",
  description: "Here you can view all existing superheroes",
  icons: { icon: "@/app/favicon.ico" },
};

export const generateViewport = () => ({
  initialScale: 1.0,
  width: "device-width",
});

const Page = () => {
  return <CatalogSection />;
};

export default Page;
