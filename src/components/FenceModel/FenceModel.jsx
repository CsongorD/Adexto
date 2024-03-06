import { useEffect, useState } from "react";
import "./FenceModel.css";

import Spline from "@splinetool/react-spline";
import Spinner from "../../components/Spinner/Spinner";

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
    <div className="model">
      {loading ? (
        <Spinner />
      ) : (
        <Spline scene={model} onLoad={() => handleLoad()} />
      )}
    </div>
  );
};
export default FenceModel;
