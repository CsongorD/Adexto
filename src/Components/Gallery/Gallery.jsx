import "./Gallery.css";
import ImageComponent from "../ImageComponent/ImageComponent";
import { useEffect, useState } from "react";

const Gallery = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetchPosts();
  }, []);

  function fetchPosts() {
    const asd = require("../../assets/db/gallery_db.json");
    setPosts(asd);
  }

  return (
    <div className="gallery">
      <h1 className="title">GALERIJA</h1>
      <div className="gallery-container">
        {posts?.map((image, index) => (
          <div key={index} className="img-container">
            <ImageComponent
              alt={"gallery-image-" + index}
              src={image.path}
              small={image.small}
              preload={index < 6 ? "preload" : ""}
              loading={index < 6 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
