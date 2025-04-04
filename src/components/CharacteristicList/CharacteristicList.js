"use client";

import useImages from "../../hooks/useImages";
import Characteristic from "../Characteristic/Characteristic";
import ImageLoading from "../ImageLoading/ImageLoading";
import styles from "./CharacteristicList.module.css";

const Characteristics = () => {
  const [characteristics, error] = useImages("characteristic");

  if (error) throw error;

  return (
    <div className={styles["characteristic-list"]}>
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
