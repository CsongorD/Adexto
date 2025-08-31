import { Rubik } from "next/font/google";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: 'swap',
});

export const metadata = {
  title: {
    default: "Adexto - Premium Betonske Ograde Zrenjanin",
    template: "%s | Adexto",
  },
  description:
    "Adexto proizvodi visokokvalitetne betonske ograde u Zrenjaninu, savršene za zaštitu i estetiku vašeg prostora.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      {
        url: "images/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  keywords:
    "betonske ograde, Zrenjanin, Adexto, ograda, betonske ograde zaštita",
  alternates: {
    canonical: "https://adexto.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Adexto - Premium Betonske Ograde Zrenjanin",
    description:
      "Adexto proizvodi visokokvalitetne betonske ograde u Zrenjaninu, savršene za zaštitu i estetiku vašeg prostora.",
    url: "https://adexto.com",
    siteName: "Adexto",
    type: "website",
    locale: "sr_RS",
    alternateLocale: ["en_US"],
  },
  creator: "Adexto",
  publisher: "Adexto",
  verification: {
    google: "ry2p4t0L_z9AhK5gYh4KU8vXzkYivtR_odspxBEJjJ4",
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          name: "Adexto",
          url: "https://adexto.com",
        },
        {
          "@type": "Organization",
          name: "Adexto",
          url: "https://adexto.com",
          logo: "https://adexto.com/images/logo.svg",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+381 66 8822 339",
            contactType: "Customer Service",
          },
        },
      ],
    }),
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="sr-RS" className="scroll-smooth">
      <body className={`${rubik.className} min-h-screen flex flex-col bg-white`}>
        <ErrorBoundary />
        <Header />
        <main className="flex-1 pt-16 sm:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}