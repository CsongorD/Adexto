"use client";
import useImages from "../../hooks/useImages";
import Image from "../Image/Image";
import ImageLoading from "../ImageLoading/ImageLoading";
import NavButton from "../NavButton/NavButton";
import styles from "./Logo.module.css";

const Logo = () => {
  const [logo, error] = useImages("logo");

  if (error) throw error;
  if (!logo) return <ImageLoading />;

  return (
    <div className={styles["logo-container"]}>
      <NavButton
        className={styles["logo"]}
        to="/"
        text={
          <>
            <div className={styles["logo-image"]}>
              <Image
                src={logo[0]?.path}
                small={logo[0]?.small}
                alt="adexto-logo"
                priority={true}
              />
            </div>
            <h2>ADEXTO</h2>
          </>
        }
      />
    </div>
  );
};
export default Logo;
