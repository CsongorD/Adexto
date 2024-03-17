import "./TypeList.css";
import Type from "../Type/Type";
import useImages from "../../hooks/useImages";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import ImageLoading from "../ImageLoading/ImageLoading";

const TypeList = () => {
  const [types, error] = useImages("type");

  if (error) {
    return <ErrorComponent error={error.message} />;
  }

  if (!types) {
    return <ImageLoading />;
  }

  return (
    <div className="type-list">
      {types?.map((type, index) => (
        <Type type={type} key={index} index={index} />
      ))}
    </div>
  );
};
export default TypeList;
