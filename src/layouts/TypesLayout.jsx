import { Helmet } from "react-helmet-async";
import TypesPage from "../pages/TypesPage/TypesPage";

const TypesLayout = () => {
  return (
    <>
      <Helmet>
        <meta property="og:site_name" content="Adexto" />
        <title>Cenovnik</title>
        <meta
          name="description"
          content="Cenovnik..........................................."
        />
        <link rel="canonical" href="https://adexto.web.app/cenovnik" />
      </Helmet>
      <TypesPage />
    </>
  );
};
export default TypesLayout;
