import ContactCard from "../../components/ContactCard/ContactCard";
import GoogleMaps from "../../components/GoogleMaps/GoogleMaps";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import RelatedLinks from "../../components/RelatedLinks/RelatedLinks";

export const metadata = {
  title: "Kontakt - Betonske Ograde Zrenjanin",
  description:
    "Kontaktirajte nas za više informacija o našim betonskim ogradama u Zrenjaninu. Naša ekipa je tu da vam pomogne!",
  keywords:
    "kontakt betonske ograde, Zrenjanin kontakt, Adexto kontakt, betonske ograde Zrenjanin, info o betonskim ogradama",
  openGraph: {
    title: "Kontakt - Betonske Ograde Zrenjanin | Adexto",
    description:
      "Kontaktirajte nas za više informacija o našim betonskim ogradama u Zrenjaninu. Naša ekipa je tu da vam pomogne!",
    url: "https://adexto.com/kontakt",
    siteName: "Adexto",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumbs />
      <div className="section-padding">
        <div className="container-custom">
          <div className="mb-8 text-center sm:mb-12 lg:mb-16">
            <h1 className="mb-4 text-2xl font-bold text-primary-800 sm:text-3xl lg:text-4xl">
              Kontaktirajte <span className="text-gradient">nas</span>
            </h1>
            <p className="mx-auto max-w-3xl px-4 text-base text-primary-600 sm:text-lg lg:text-xl">
              Spremni smo da odgovorimo na sva vaša pitanja i pomognemo vam u
              izboru
            </p>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
            <ContactCard />
            <GoogleMaps />
          </div>
        </div>
      </div>
      <RelatedLinks currentPage="/kontakt" />
    </div>
  );
}
