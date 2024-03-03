import "./ContactLayout.css";
import { lazy, Suspense } from "react";
const ContactCard = lazy(() =>
  import("../../components/ContactCard/ContactCard")
);
const GoogleMaps = lazy(() => import("../../components/GoogleMaps/GoogleMaps"));

const ContactLayout = () => {
  return (
    <div className="contact-page">
      <div className="contact-us-container">
        <Suspense fallback={<div>Loadding</div>}>
          <ContactCard />
          <GoogleMaps />
        </Suspense>
      </div>
    </div>
  );
};

export default ContactLayout;
