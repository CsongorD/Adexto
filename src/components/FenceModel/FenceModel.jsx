import { Suspense, lazy, useEffect, useState } from "react";
import "./FenceModel.css";
import ImageLoading from "../../components/ImageLoading/ImageLoading";
const Spline = lazy(() => import("@splinetool/react-spline"));

const FenceModel = () => {
  const [model, setModel] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleLoad();
  }, []);
  function handleLoad() {
    setModel("https://prod.spline.design/dCHi5qcJbR3olvzV/scene.splinecode");
    setLoading(false);
  }
  return (
    <div className="fence-model-container">
      {loading ? (
        <ImageLoading />
      ) : (
        <Suspense fallback={<ImageLoading />}>
          <Spline scene={model} />
        </Suspense>
      )}
    </div>
  );
};
export default FenceModel;
