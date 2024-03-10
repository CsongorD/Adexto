import "./GalleryPage.css";
import { Helmet } from "react-helmet-async";
import Gallery from "../../components/Gallery/Gallery";

const GalleryPage = () => {
  return (
    <>
      <Helmet>
        <title>Galerija</title>
        <meta
          name="description"
          content="Vidite galeriju...................................."
        />
        <link rel="canonical" href="https://adexto.web.app//galerija" />
      </Helmet>
      <div className="gallery-page page-margin-top">
        <Gallery />
      </div>
    </>
  );
};

export default GalleryPage;
