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
    <html lang="sr-RS">
      <body className={rubik.className + " root-layout"}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
