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
        <Link href="/accueil">Accueil</Link>
        <Link href="/catalogue">Catalogue</Link>
        <Link href="/reservation">Réservation</Link>
        <Link href="/a-propos">À propos</Link>
        <Link href="/contact">Contact</Link>
      </div>

    </nav>
  );
}