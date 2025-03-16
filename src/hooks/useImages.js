"use client";

import { useEffect, useState } from "react";

const useImages = (db) => {
  const [images, setImages] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await import(`../data/${db}_db.json`);
        const images = response.default;

        if (!response || !images) {
          throw new Error("Failed to fetch data");
        }
        setImages(images);
      } catch (error) {
        setError(error);
      }
    }

    fetchImages();
  }, [db]);

  return [images, error];
};
export default useImages;
