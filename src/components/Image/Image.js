"use client";

import NextImage from "next/image";
import { useState } from "react";

const Image = ({ src, alt, small, priority = false, onLoad = () => {} }) => {
  const [imageError, setImageError] = useState(false);

  const handleError = () => {
    setImageError(true);
  };

  if (imageError) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-primary-200">
        <div className="text-center text-primary-300">
          <svg
            className="mx-auto mb-2 h-12 w-12"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-sm">Image not available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full">
      <NextImage
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        fill={true}
        onLoad={onLoad}
        onError={handleError}
        priority={priority}
        placeholder={small ? "blur" : "empty"}
        blurDataURL={small}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

export default Image;
