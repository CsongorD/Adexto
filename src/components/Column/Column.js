import styles from "./Column.module.css";
import Image from "../Image/Image";

const Column = ({ column }) => {
  const { name, path, small, options } = column;
  return (
    <div className={styles["column-container"]}>
      <h2 className={styles["column-title"]}>{name}</h2>
      <div className={styles["column-image"]}>
        <Image src={path} alt={name} small={small} loading="lazy" />
      </div>
      <div className={styles["column-lengths"]}>
        <h3>DUŽINE:</h3>
        {options.map((option, index) => (
          <div key={index} className={styles["column-length"]}>
            <p>
              {`${option.length.toFixed(1)}m (ukupna dužina: ${
                option.full_length
              }m) => ${option.price}€`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Column;
