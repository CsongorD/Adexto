import ContactCard from "../../components/ContactCard/ContactCard";
import GoogleMaps from "../../components/GoogleMaps/GoogleMaps";
import styles from "../../styles/contact.module.css";

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
    <div className={`${styles["contact-page"]} page-margin-top`}>
      <ContactCard />
      <GoogleMaps />
    </div>
  );
}
