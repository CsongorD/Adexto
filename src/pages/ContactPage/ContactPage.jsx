import "./ContactPage.css";
import ContactCard from "../../components/ContactCard/ContactCard";
import GoogleMaps from "../../components/GoogleMaps/GoogleMaps";
import { Helmet } from "react-helmet-async";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact</title>
        <meta
          name="description"
          content="Kontaktirajte nas na: ................................"
        />
        <link rel="canonical" href="https://adexto.web.app/kontakt" />
      </Helmet>

      <div className="contact-page">
        <div className="contact-us-container">
          <ContactCard />
          <GoogleMaps />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
