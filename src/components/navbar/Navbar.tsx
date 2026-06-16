import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 border-b bg-white flex items-center justify-between">
      
      {/* Logo */}
      <div className="text-xl font-bold">
        RealEstate
      </div>

      {/* Links */}
      <div className="flex gap-6 text-sm">
        <Link href="/pages/accueil">Accueil</Link>
        <Link href="/pages/catalogue">Catalogue</Link>
        <Link href="/pages/reservation">Réservation</Link>
        <Link href="/pages/a-propos">À propos</Link>
        <Link href="/pages/contact">Contact</Link>
      </div>

    </nav>
  );
}