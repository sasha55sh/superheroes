import CreateSuperheroSection from "@/app/sections/create-page/CreateSuperheroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Superheroes - Create",
  description: "Here you can create new superhero and add data",
  icons: { icon: "@/app/favicon.ico" },
};

export const generateViewport = () => ({
  initialScale: 1.0,
  width: "device-width",
});

const Page = () => {
  return <CreateSuperheroSection />;
};

export default Page;
