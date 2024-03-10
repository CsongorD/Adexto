import { useEffect, useState } from "react";

const useImages = (db) => {
  const [images, setImages] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchImages()
      .then((response) => setImages(response))
      .catch((error) => setError(error));
  }, [db]);

  async function fetchImages() {
    try {
      const response = await import(`../data/${db}_db.json`);
      const images = response.default;

      if (!response || !images) {
        throw new Error("Failed to fetch data");
      }
      return images;
    } catch (error) {
      throw error;
    }
  }
  return [images, error];
};
export default useImages;
