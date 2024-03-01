import "./GalleryLayout.css";
import { Suspense, lazy } from "react";
import gallery from "../../data/gallery_db.json";

const Gallery = lazy(() => import("../../components/Gallery/Gallery"));
const GalleryLayout = () => {
  return (
    <div className="gallery-page">
      <Suspense fallback={<div>Loading</div>}>
        <Gallery gallery={gallery} />
      </Suspense>
    </div>
  );
};

export default GalleryLayout;
