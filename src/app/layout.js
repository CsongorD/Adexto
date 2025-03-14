import { Rubik } from "next/font/google";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "../styles/global.css";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

export const metadata = {
  title: {
    default: "Adexto - Betonske Ograde Zrenjanin",
    template: "%s | Adexto", // Page title format
  },
  description:
    "Adexto proizvodi visokokvalitetne betonske ograde u Zrenjaninu.",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
  },

  keywords: "betonske ograde, Zrenjanin, Adexto, ograda",
  alternates: {
    canonical: "https://adexto.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Adexto - Betonske Ograde Zrenjanin",
    description:
      "Adexto proizvodi visokokvalitetne betonske ograde u Zrenjaninu.",
    url: "https://adexto.com",
    siteName: "Adexto",
    images: [
      {
        url: "https://adexto.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Adexto Betonske Ograde",
      },
    ],
    type: "website",
    locale: "sr_RS",
    alternateLocale: ["en_US"],
  },
  creator: "Adexto",
  publisher: "Adexto",
  verification: {
    google: "ry2p4t0L_z9AhK5gYh4KU8vXzkYivtR_odspxBEJjJ4",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://firebasestorage.googleapis.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Adexto",
              url: "https://adexto.com/",
            }),
          }}
        />
      </head>
      <body className={`${rubik.className} root-layout`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
