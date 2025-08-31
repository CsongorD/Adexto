"use client";

import useImages from "../../hooks/useImages";
import GalleryImage from "../GalleryImage/GalleryImage";
import ImageLoading from "../ImageLoading/ImageLoading";

const GalleryList = () => {
  const [gallery, error] = useImages("gallery");

  if (error) throw error;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {!gallery ? (
        <div className="col-span-full flex justify-center py-8 sm:py-12">
          <ImageLoading />
        </div>
      ) : (
        gallery?.map((image, index) => (
          <div key={index} className="animate-fade-in" style={{animationDelay: `${index * 0.05}s`}}>
            <GalleryImage image={image} index={index} />
          </div>
        ))
      )}
    </div>
  );
};

export default GalleryList;