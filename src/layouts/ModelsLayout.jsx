import { Helmet } from "react-helmet-async";
import ModelsPage from "../pages/ModelsPage/ModelsPage";

const ModelsLayout = () => {
  return (
    <>
      <Helmet>
        <meta property="og:site_name" content="Adexto" />
        <title>Modeli</title>
        <meta
          name="description"
          content="Vidite nase modeli.................................."
        />
        <link rel="canonical" href="https://adexto.web.app/modeli" />
      </Helmet>
      <ModelsPage />
    </>
  );
};
export default ModelsLayout;
