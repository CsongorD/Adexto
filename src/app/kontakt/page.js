import ContactCard from "../../components/ContactCard/ContactCard";
import GoogleMaps from "../../components/GoogleMaps/GoogleMaps";
import styles from "../../styles/contact.module.css";

export const metadata = {
  title: "Kontakt",
  description: "Kontaktirajte nas za više informacija o betonskim ogradama.",
  keywords: "kontakt, betonske ograde, Zrenjanin, Adexto",
  openGraph: {
    title: "Kontakt - Adexto",
    description: "Kontaktirajte nas za više informacija o betonskim ogradama.",
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
