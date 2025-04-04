import useImages from "../../hooks/useImages";
import ImageLoading from "../ImageLoading/ImageLoading";
import Type from "../Type/Type";
import styles from "./TypeList.module.css";

const TypeList = () => {
  const [types, error] = useImages("type");

  if (error) throw error;

  return (
    <div className={styles["type-list"]}>
      {!types ? (
        <ImageLoading />
      ) : (
        types.map((type, index) => (
          <Type key={type.id || index} type={type} index={index} />
        ))
      )}
    </div>
  );
};

export default TypeList;
