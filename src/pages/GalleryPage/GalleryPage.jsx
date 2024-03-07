import "./GalleryPage.css";
import gallery from "../../data/gallery_db.json";
import Gallery from "../../components/Gallery/Gallery";
import { Helmet } from "react-helmet-async";

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
      <div className="gallery-page">
        <Gallery gallery={gallery} />
      </div>
    </>
  );
};

export default GalleryPage;
