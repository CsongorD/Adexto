import { Suspense, lazy, useEffect, useState } from "react";
import "./FenceModel.css";
import LoadingIcon from "../../components/LoadingIcon/LoadingIcon";
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
        <LoadingIcon />
      ) : (
        <Suspense fallbac={<LoadingIcon />}>
          <Spline scene={model} onLoad={() => handleLoad()} />
        </Suspense>
      )}
    </div>
  );
};
export default FenceModel;
