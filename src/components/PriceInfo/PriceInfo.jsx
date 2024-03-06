import "./PriceInfo.css";
import { forwardRef } from "react";

const PriceInfo = forwardRef((_props, ref) => {
  return (
    <div className="price-info-container" ref={ref}>
      <h1 className="title">INFO</h1>
      <div className="price-info-box">
        <div className="price-info-text">
          <p>1. Ugradnja ograde (1.5m visine) 7€ 1m dužni</p>
          <p>2. Ugradnja ograde (2.0m visine) 9€ 1m dužni</p>
          <p>3. Ugradnja ograde (2.5m visine) 13€ 1m dužni</p>
          <p>4. Ugradnja montažnog objekta 14€ 1m dužni</p>
        </div>
        <br />
        <div className="price-info-text">
          <p>* Sve cene su bez PDV-a.</p>
          <p>
            ** Ove cene su za ugradnju ograde u zemlju, na ravnoj površini.
            Ugradnja u beton, pored drveća (zbog korenja) i na kosine (kaskade)
            naplaćuje se po dogovoru.
          </p>
          <p>
            *** Cena za TRANSPORT zavisi od poručene količine (ukupne težine
            robe) i Vaše destinacije.
          </p>
        </div>
      </div>
    </div>
  );
});

export default PriceInfo;
