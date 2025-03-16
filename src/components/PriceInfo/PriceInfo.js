import { forwardRef } from "react";
import styles from "./PriceInfo.module.css";

const PriceInfo = forwardRef((_props, ref) => {
  return (
    <div className={styles["price-info"]} ref={ref}>
      <h1 className={styles["title"]}>INFO</h1>
      <div className={styles["price-info-container"]}>
        <div className={styles["price-info-text"]}>
          <p>
            1. Ugradnja ograde (1.5m visine) - <strong>7€ / 1m dužni</strong>
          </p>
          <p>
            2. Ugradnja ograde (2.0m visine) - <strong>9€ / 1m dužni</strong>
          </p>
        </div>
        <div className={styles["price-info-text"]}>
          <p>
            <em>* Sve cene su bez PDV-a.</em>
          </p>
          <p>
            <em>** Ove cene važe za ugradnju u zemlju na ravnoj površini.</em>
            <br />
            Ugradnja u beton, pored drveća (zbog korenja) i na kosine (kaskade)
            naplaćuje se po dogovoru.
          </p>
          <p>
            <em>
              *** Cena za transport zavisi od poručene količine (ukupne težine
              robe) i Vaše destinacije.
            </em>
          </p>
        </div>
      </div>
    </div>
  );
});
PriceInfo.displayName = "PriceInfo";

export default PriceInfo;
