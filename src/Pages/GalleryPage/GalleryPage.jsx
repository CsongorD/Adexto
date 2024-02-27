import "./GalleryPage.css";
import Header from "../../Components/Header/Header";
import Gallery from "../../Components/Gallery/Gallery";
import Footer from "../../Components/Footer/Footer";

const GalleryPage = () => {
  return (
    <div className="gallery-page">
      <Header />
      <Gallery />
      <Footer />
    </div>
  );
};

export default GalleryPage;
