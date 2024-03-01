import "./GalleryPage.css";

import Header from "../../Components/Header/Header";
import Gallery from "../../Components/Gallery/Gallery";
import Footer from "../../Components/Footer/Footer";

import gallery from "../../assets/db/gallery_db.json";

const GalleryPage = () => {
  return (
    <div className="gallery-page">
      <Header />
      <Gallery gallery={gallery} />
      <Footer />
    </div>
  );
};

export default GalleryPage;
