import "./ContactPage.css";
import { Helmet } from "react-helmet-async";
import ContactCard from "../../components/ContactCard/ContactCard";
import GoogleMaps from "../../components/GoogleMaps/GoogleMaps";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Kontakt</title>
        <meta
          name="description"
          content="Kontaktirajte nas na: ................................"
        />
        <link rel="canonical" href="https://adexto.web.app/kontakt" />
      </Helmet>
      <div className="contact-page page-margin-top">
        <ContactCard />
        <GoogleMaps />
      </div>
    </>
  );
};

export default ContactPage;
