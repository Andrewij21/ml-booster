import Image from "next/image";
import Link from "next/link";
// Tambahkan ikon Tiktok dan hapus yang tidak perlu
import { FaTiktok, FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Logo */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.jpeg" // Pastikan logo.png ada di folder /public
                alt="AMZZYR STORE Logo"
                width={32}
                height={32}
              />
              <span className="font-bold text-xl text-foreground">
                AMZZYR STORE
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Layanan joki Mobile Legends profesional. Naik rank cepat dan aman
              bersama pro player kami.
            </p>
          </div>

          {/* Layanan Kami */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Layanan Kami</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/#pricing" // Mengarah ke section harga per bintang
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Joki Per Bintang
                </Link>
              </li>
              <li>
                <Link
                  href="/#special-packages" // Mengarah ke section paket borongan
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Paket Borongan
                </Link>
              </li>
              <li>
                <Link
                  href="/#pricing"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Joki Classic / WR
                </Link>
              </li>
            </ul>
          </div>

          {/* Dukungan */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Dukungan</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://wa.me/6282111793609" // Langsung ke WhatsApp
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Hubungi Admin
                </Link>
              </li>
            </ul>
          </div>

          {/* Sosial Media */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Ikuti Kami</h3>
            <div className="flex space-x-4">
              <Link
                href="https://www.tiktok.com/@amzzyr.store" // Link TikTok Anda
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="TikTok"
              >
                <FaTiktok className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 AMZZYR STORE. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
