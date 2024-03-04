import "./GalleryPage.css";
import gallery from "../../data/gallery_db.json";
import Gallery from "../../components/Gallery/Gallery";
const GalleryPage = () => {
  return (
    <div className="gallery-page">
      <Gallery gallery={gallery} />
    </div>
  );
};

export default GalleryPage;
