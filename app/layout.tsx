import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/HeaderComponent";
import Footer from "@/components/FooterComponent";
import { MantineProvider } from "@mantine/core";
import { AlertProvider } from "@/hooks/useAlert";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Superheroes",
  description: "Modern database for real superheroes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <MantineProvider>
          <AlertProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </AlertProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
