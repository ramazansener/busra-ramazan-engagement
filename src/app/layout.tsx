import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Büşra & Ramazan · Nişan Davetiyesi",
  description:
    "Büşra ve Ramazan'ın nişan törenine davetlisiniz. 1 Kasım 2026, Pazar · 14:00–17:00 · Pembe Köşk, 15 Temmuz Mah. 148060 Nolu Cad. No:7 D:1, Şehitkamil / Gaziantep",
  openGraph: {
    title: "Büşra & Ramazan · Nişan Davetiyesi",
    description: "1 Kasım 2026 · Pembe Köşk · Şehitkamil / Gaziantep",
    type: "website",
    locale: "tr_TR",
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
      className={`${cormorant.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-dvh min-h-svh overflow-x-hidden bg-atmosphere font-sans text-ink">
        {children}
      </body>
    </html>
  );
}
