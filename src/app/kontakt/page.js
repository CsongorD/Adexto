import ContactCard from "../../components/ContactCard/ContactCard";
import GoogleMaps from "../../components/GoogleMaps/GoogleMaps";

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
      <div className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Kontaktirajte <span className="text-gradient">nas</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Spremni smo da odgovorimo na sva vaša pitanja i pomognemo vam u izboru
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <ContactCard />
            <GoogleMaps />
          </div>
        </div>
      </div>
    </div>
  );
}