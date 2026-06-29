import "./globals.css";
import "./animations.css";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import RevealController from "@/app/reveal";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "LIONIN Immobilier | Locations premium au Maroc",
  description:
    "Agence immobilière premium spécialisée dans la location de villas, appartements et biens haut standing au Maroc.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <RevealController />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}


