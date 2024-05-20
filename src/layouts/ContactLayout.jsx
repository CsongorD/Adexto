import { Helmet } from "react-helmet-async";
import ContactPage from "../pages/ContactPage/ContactPage";

const ContactLayout = () => {
  return (
    <>
      <Helmet>
        <meta property="og:site_name" content="Adexto" />
        <title>Kontakt</title>
        <meta
          name="description"
          content="Kontaktirajte nas na: ................................"
        />
        <link rel="canonical" href="https://adexto.com/kontakt" />
      </Helmet>
      <ContactPage />
    </>
  );
};
export default ContactLayout;
