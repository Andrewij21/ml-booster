"use client";

import { Navigation } from "@/components/layouts/Navigation";
import { Footer } from "@/components/layouts/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Shield,
  Clock,
  CheckCircle,
  ShieldCheck,
  TrendingUp,
  ThumbsUp,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
const rankBoostingPrices = [
  {
    rank: "EPIC",
    price: "Rp 4.000",
    time: "Harga per Bintang",
    popular: false,
  },
  {
    rank: "LEGEND",
    price: "Rp 6.000",
    time: "Harga per Bintang",
    popular: false,
  },
  {
    rank: "MYTHIC",
    price: "Rp 9.000",
    time: "Harga per Bintang",
    popular: true, // Kita tandai sebagai populer
  },
  {
    rank: "MYTHIC HONOR",
    price: "Rp 11.000",
    time: "Harga per Bintang",
    popular: false,
  },
  {
    rank: "MYTHIC GLORY",
    price: "Rp 15.000",
    time: "Harga per Bintang",
    popular: false,
  },
];

export default function HomePage() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Joki ML Terpercaya",
      description:
        "Proses joki dikerjakan oleh pro player kami, menjamin keamanan penuh dan privasi untuk akun Anda.",
    },
    {
      icon: TrendingUp,
      title: "Rank Up Cepat & Aman",
      description:
        "Kami menaikkan rank Anda secara efisien dan dalam waktu singkat, tanpa menggunakan cheat atau metode ilegal apapun.",
    },
    {
      icon: ThumbsUp,
      title: "Proses Mudah & Cepat",
      description:
        "Pesan layanan kami dengan sangat mudah. Admin kami siap melayani Anda dengan ramah dan responsif.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <section
        className="relative overflow-hidden h-screen flex items-center justify-center"
        style={{
          backgroundImage: "url('/hero3.jpg')", // Pastikan gambar ini ada di folder /public
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Lapisan gelap agar teks mudah dibaca */}
        <div className="absolute inset-0 bg-black/80 z-10" />

        {/* Konten di Tengah */}
        <div className="relative z-20 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 max-w-4xl mx-auto"
          >
            <div className="space-y-6">
              <Badge
                variant="secondary"
                className="bg-accent/20 text-accent border-accent/30 backdrop-blur-sm"
              >
                Layanan Joki MLBB Terpercaya
              </Badge>
              <h1 className="text-4xl lg:text-7xl font-bold text-balance text-white">
                Push Rank Tanpa Pusing,{" "}
                <span className="text-primary">Cepat & Aman</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 text-pretty max-w-3xl mx-auto">
                Layanan joki profesional dengan tingkat keberhasilan 99.9%.
                Gapai rank impianmu dibantu oleh para pro player kami.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4"
              >
                <Link
                  href="https://wa.me/628151899318?text=Halo%2C%20saya%20tertarik%20dengan%20layanan%20joki%20rank%20dari%20AMZZYR%20STORE."
                  target="_blank"
                >
                  Pesan Joki Sekarang
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent backdrop-blur-sm text-lg px-8 py-4"
              >
                <Link href="#pricing">Lihat Harga</Link>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10,000+</div>
                <div className="text-sm text-white/80">Pesanan Selesai</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-white/80">
                  Tingkat Keberhasilan
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-white/80">Layanan Admin</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">
              Kenapa Harus Joki di AMZZYR STORE?
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Kami adalah layanan joki Mobile Legends paling tepercaya dengan
              ribuan pelanggan yang puas.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-20" id="pricing">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">
              Paket Joki Rank AMZZYR STORE
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Pilih paket joki rank sesuai kebutuhan Anda untuk push rank awal
              season bersama pro player kami.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {rankBoostingPrices.map((item, index) => {
                // --- PERUBAHAN UTAMA DIMULAI DI SINI ---
                // 1. Buat pesan dinamis berdasarkan rank yang dipilih
                const message = `Halo AMZZYR STORE, saya tertarik dengan paket joki rank: ${item.rank}.`;

                // 2. Encode pesan agar formatnya benar untuk URL
                const encodedMessage = encodeURIComponent(message);

                // 3. Gabungkan menjadi satu link WhatsApp yang lengkap
                const whatsappLink = `https://wa.me/6282111793609?text=${encodedMessage}`;
                // --- PERUBAHAN UTAMA SELESAI DI SINI ---

                return (
                  <motion.div
                    key={item.rank}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      className={`relative h-full hover:shadow-primary/20 hover:shadow-lg transition-shadow ${
                        item.popular ? "ring-2 ring-primary" : ""
                      }`}
                    >
                      {item.popular && (
                        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                          Paling Laris
                        </Badge>
                      )}
                      <CardHeader className="text-center">
                        <CardTitle className="text-xl font-bold">
                          {item.rank}
                        </CardTitle>
                        <div className="space-y-2 pt-2">
                          <div className="text-3xl font-bold text-primary">
                            {item.price}
                          </div>
                          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            {item.time}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <ul className="space-y-2 text-left">
                          {features.slice(0, 3).map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-2 text-sm"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              {feature.title}
                            </li>
                          ))}
                        </ul>
                        <Button
                          asChild
                          className="w-full bg-primary hover:bg-primary/90"
                        >
                          {/* 4. Gunakan link dinamis yang sudah kita buat */}
                          <Link href={whatsappLink} target="_blank">
                            Pesan Sekarang
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-balance">
              Siap Gapai Rank Impianmu?
            </h2>
            <p className="text-xl text-white/90 text-pretty max-w-2xl mx-auto">
              Bergabunglah dengan ribuan pelanggan puas yang telah mencapai
              tujuan rank mereka bersama AMZZYR STORE.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
              >
                {/* Mengarahkan ke WhatsApp yang benar */}
                <Link href="https://wa.me/6282111793609?text=Halo%20AMZZYR%20STORE,%20saya%20tertarik%20dengan%20layanan%20joki%20rank.">
                  Pesan Joki Sekarang
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
