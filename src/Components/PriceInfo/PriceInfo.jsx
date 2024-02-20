import "./PriceInfo.css";
import { forwardRef } from "react";

// eslint-disable-next-line no-empty-pattern
const PriceInfo = ({}, ref) => {
  return (
    <div className="price-info-container" ref={ref}>
      <h1 className="title">INFO</h1>
      <div className="price-info-box">
        <div className="price-info-text">
          <h3>1. Ugradnja ograde (1.5m visine) 7€ 1m dužni</h3>
          <h3>2. Ugradnja ograde (2.0m visine) 9€ 1m dužni</h3>
          <h3>3. Ugradnja ograde (2.5m visine) 13€ 1m dužni</h3>
          <h3>4. Ugradnja montažnog objekta 14€ 1m dužni</h3>
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
};

export default forwardRef(PriceInfo);
