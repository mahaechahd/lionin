import "./globals.css";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LIONIN",
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

        <main className="p-6">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}
