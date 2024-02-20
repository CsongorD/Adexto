import "./FenceModel.css";
import React, { lazy, Suspense } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

const FenceModel = () => {
  return (
    <div className="model">
      <Suspense fallback={<div>Loading</div>}>
        <Spline scene="https://prod.spline.design/dCHi5qcJbR3olvzV/scene.splinecode" />
      </Suspense>
    </div>
  );
};
export default FenceModel;
