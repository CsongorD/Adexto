import styles from "./FenceModel.module.css";

const FenceModel = () => {
  return (
    <div className={styles["fence-model-container"]}>
      <video autoPlay>
        <source src="/adexto-3-d-model.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default FenceModel;
