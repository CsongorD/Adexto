import "./ContactPage.css";
import ContactCard from "../../components/ContactCard/ContactCard";
import GoogleMaps from "../../components/GoogleMaps/GoogleMaps";

const ContactPage = () => {
  return (
    <div className="contact-page page-margin-top">
      <ContactCard />
      <GoogleMaps />
    </div>
  );
};
export default ContactPage;
