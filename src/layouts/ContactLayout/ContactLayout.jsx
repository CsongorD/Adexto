import "./ContactLayout.css";
import ContactCard from "../../components/ContactCard/ContactCard";
import GoogleMaps from "../../components/GoogleMaps/GoogleMaps";

const ContactLayout = () => {
  return (
    <div className="contact-page">
      <div className="contact-us-container">
        <ContactCard />
        <GoogleMaps />
      </div>
    </div>
  );
};

export default ContactLayout;
