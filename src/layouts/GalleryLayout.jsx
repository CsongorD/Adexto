import { Helmet } from "react-helmet-async";
import GalleryPage from "../pages/GalleryPage/GalleryPage";

const GalleryLayout = () => {
  return (
    <>
      <Helmet>
        <title>Galerija</title>
        <meta
          name="description"
          content="Vidite galeriju...................................."
        />
        <link rel="canonical" href="https://adexto.web.app/galerija" />
      </Helmet>
      <GalleryPage />
    </>
  );
};
export default GalleryLayout;
