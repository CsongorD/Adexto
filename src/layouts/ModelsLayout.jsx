import { Helmet } from "react-helmet-async";
import ModelsPage from "../pages/ModelsPage/ModelsPage";

const ModelsLayout = () => {
  return (
    <>
      <Helmet>
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
