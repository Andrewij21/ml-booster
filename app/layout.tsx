import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/providers/QueryProvider";
import { AuthProvider } from "@/context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Ganti nilai-nilai placeholder di bawah ini dengan informasi Anda
const APP_NAME = "AMZZYR STORE";
const APP_DESCRIPTION =
  "Layanan Joki Mobile Legends terpercaya untuk push rank cepat dan aman. Dikerjakan oleh pro player profesional.";
const APP_URL = "https://amzzyr-store.com"; // Ganti dengan domain Anda jika sudah ada

export const metadata: Metadata = {
  // metadataBase digunakan untuk URL absolut di Open Graph & Twitter
  metadataBase: new URL(APP_URL),

  // Title akan menggunakan template, misal: "Daftar Harga | AMZZYR STORE"
  title: {
    template: `%s | ${APP_NAME}`,
    default: `${APP_NAME} - Joki MLBB Cepat & Terpercaya`,
  },
  description: APP_DESCRIPTION,

  // Untuk SEO dan mesin pencari
  keywords: [
    "joki ml",
    "joki mlbb",
    "joki mobile legends",
    "amzzyr store",
    "push rank",
    "mlbb boosting",
    "joki rank aman",
  ],
  authors: [{ name: APP_NAME }],
  creator: APP_NAME,

  // Untuk social media sharing (Facebook, LinkedIn, WhatsApp, dll.)
  openGraph: {
    title: `${APP_NAME} - Joki MLBB Cepat & Terpercaya`,
    description: APP_DESCRIPTION,
    url: APP_URL,
    siteName: APP_NAME,
    images: [
      {
        url: "/og-image.png", // Letakkan gambar ini di folder /public
        width: 1200,
        height: 630,
        alt: `Promosi ${APP_NAME}`,
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  // Untuk Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: `${APP_NAME} - Joki MLBB Cepat & Terpercaya`,
    description: APP_DESCRIPTION,
    images: ["/og-image.png"], // Gunakan gambar yang sama
    creator: "@amzzy2607", // Ganti dengan handle Twitter/TikTok Anda
  },

  // Untuk ikon di tab browser (favicon)
  icons: {
    icon: "/logo.jpeg",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
          <AuthProvider>{children}</AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
