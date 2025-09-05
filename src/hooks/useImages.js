"use client";

import allData from "../data/all_data";

const useImages = (db) => {
  const images = allData[db] || null;
  const error = images ? null : new Error(`Data for "${db}" not found`);

  return [images, error];
};

export default useImages;