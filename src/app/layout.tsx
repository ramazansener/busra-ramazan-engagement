import type { Metadata, Viewport } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://busra-ramazan-engagement.vercel.app"),
  title: "Büşra & Ramazan · Nişan Davetiyesi",
  description:
    "Büşra ve Ramazan'ın nişan törenine davetlisiniz. 1 Kasım 2026, Pazar · 14:00–17:00 · Pembe Köşk, 15 Temmuz Mah. 148060 Nolu Cad. No:7 D:1, Şehitkamil / Gaziantep",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
  openGraph: {
    title: "Büşra & Ramazan · Nişan Davetiyesi",
    description: "1 Kasım 2026 · Pembe Köşk · Şehitkamil / Gaziantep",
    type: "website",
    locale: "tr_TR",
    url: "https://busra-ramazan-engagement.vercel.app",
    siteName: "Büşra & Ramazan",
    images: [
      {
        url: "/images/og-share.png?v=2",
        width: 1024,
        height: 558,
        alt: "Büşra & Ramazan · Nişan Davetiyesi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Büşra & Ramazan · Nişan Davetiyesi",
    description: "1 Kasım 2026 · Pembe Köşk · Şehitkamil / Gaziantep",
    images: ["/images/og-share.png?v=2"],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Büşra & Ramazan",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#3A5A40",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-dvh min-h-svh overflow-x-hidden bg-atmosphere font-sans text-ink">
        {children}
      </body>
    </html>
  );
}
