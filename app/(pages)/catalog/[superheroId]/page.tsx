import ProfileSection from "@/app/sections/profile-page/ProfileSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Superheroes - Profile",
  description: "Here you can view the superhero profile",
  icons: { icon: "@/app/favicon.ico" },
};

export const generateViewport = () => ({
  initialScale: 1.0,
  width: "device-width",
});

const Page = ({ params }: { params: any }) => {
  const superheroId = params.superheroId;

  return (
    <>
      <ProfileSection superheroId={superheroId} />
    </>
  );
};

export default Page;
