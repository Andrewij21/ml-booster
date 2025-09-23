"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Gamepad2 } from "lucide-react";
import Image from "next/image";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    // { href: "/pricing", label: "Pricing" },
    // { href: "/order", label: "Order Now" },
    // { href: "/testimonials", label: "Testimonials" },
    // { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.jpeg" // Path ke logo di folder /public
              alt="AMZZYR STORE Logo"
              width={32} // Sesuaikan lebar logo (dalam pixel)
              height={32} // Sesuaikan tinggi logo (dalam pixel)
            />
            <span className="font-bold text-xl text-foreground">
              AMZZYR STORE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              asChild
            >
              <Link
                href="https://wa.me/6285791769602?text=Halo%20AMZZYR%20STORE,%20mau%20tanya-tanya%20soal%20paket%20joki."
                target="_blank"
              >
                Contact
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium px-2 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground mx-2">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
