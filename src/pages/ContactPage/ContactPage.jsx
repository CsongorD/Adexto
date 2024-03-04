import "./ContactPage.css";
import ContactCard from "../../components/ContactCard/ContactCard";
import GoogleMaps from "../../components/GoogleMaps/GoogleMaps";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-us-container">
        <ContactCard />
        <GoogleMaps />
      </div>
    </div>
  );
};

export default ContactPage;
