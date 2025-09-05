import { Rubik } from "next/font/google";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import PWAInstallPrompt from "../components/PWAInstallPrompt/PWAInstallPrompt";
import ServiceWorkerRegistration from "../components/ServiceWorkerRegistration/ServiceWorkerRegistration";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
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
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Adexto",
    "application-name": "Adexto",
    "msapplication-TileColor": "#1a1a1a",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#1a1a1a",
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
  additionalMetaTags: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1, viewport-fit=cover",
    },
  ],
  additionalLinkTags: [
    {
      rel: "manifest",
      href: "/manifest.json",
    },
    {
      rel: "apple-touch-startup-image",
      href: "/images/apple-touch-icon.png",
    },
  ],
  structuredData: {
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
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="sr-RS" className="scroll-smooth">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Adexto" />
        <meta name="application-name" content="Adexto" />
        <meta name="msapplication-TileColor" content="#1a1a1a" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="apple-touch-startup-image" href="/images/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
          }}
        />
      </head>
      <body
        className={`${rubik.className} flex min-h-screen flex-col bg-white`}
      >
        <Header />
        <main className="flex-1 pt-16 sm:pt-20">{children}</main>
        <Footer />
        <PWAInstallPrompt />
        <ServiceWorkerRegistration />
      </body>
    </html>
  );
}
