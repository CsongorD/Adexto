import "./CharacteristicList.css";
import useImages from "../../hooks/useImages";
import Characteristic from "../Characteristic/Characteristic";
import ImageLoading from "../ImageLoading/ImageLoading";
import ErrorComponent from "../ErrorComponent/ErrorComponent";

const Characteristics = () => {
  const [characteristics, error] = useImages("characteristic");

  if (error) {
    return <ErrorComponent error={error.message} />;
  }

  return (
    <div className="characteristic-list">
      {!characteristics ? (
        <ImageLoading />
      ) : (
        characteristics?.map((characteristic, index) => (
          <Characteristic characteristic={characteristic} key={index} />
        ))
      )}
    </div>
  );
};

export default Characteristics;
