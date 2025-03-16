"use client";

import { Suspense, lazy, useEffect, useState } from "react";
import ImageLoading from "../../components/ImageLoading/ImageLoading";
import styles from "./FenceModel.module.css";

const Spline = lazy(() => import("@splinetool/react-spline"));

const FenceModel = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [modelUrl, setModelUrl] = useState(null);

  useEffect(() => {
    setModelUrl("https://prod.spline.design/dCHi5qcJbR3olvzV/scene.splinecode");
    setIsLoading(false);
  }, []);

  return (
    <div className={styles["fence-model-container"]}>
      {isLoading ? (
        <ImageLoading />
      ) : (
        <Suspense fallback={<ImageLoading />}>
          <Spline scene={modelUrl} />
        </Suspense>
      )}
    </div>
  );
};

export default FenceModel;
