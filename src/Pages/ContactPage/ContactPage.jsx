import "./ContactPage.css";

import Header from "../../Components/Header/Header";
import ContactCard from "../../Components/ContactCard/ContactCard";
import GoogleMaps from "../../Components/GoogleMaps/GoogleMaps";
import Footer from "../../Components/Footer/Footer";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <Header />
      <div className="contact-us-container">
        <ContactCard />
        <GoogleMaps />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
