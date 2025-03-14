import Image from "../Image/Image";
import styles from "./Type.module.css";

const Type = ({ type, index }) => {
  const { number, weight, path, small, height, width, price } = type;
  const loadingType = index < 6 ? "eager" : "lazy";

  return (
    <div className={styles["type-container"]}>
      <h2 className={styles["type-number"]}>{number}</h2>
      <p className={styles["type-weight"]}>{weight} KG</p>
      <div className={styles["type-image"]}>
        <Image
          src={path}
          small={small}
          alt={`type-${number}`}
          loading={loadingType}
        />
      </div>
      <p className={styles["type-height"]}>{height} mm</p>
      <div className={styles["height-sizer"]}></div>
      <div className={styles["width-sizer"]}></div>
      <p className={styles["type-width"]}>{width} mm</p>
      <h2 className={styles["type-price"]}>{price} €</h2>
    </div>
  );
};

export default Type;
