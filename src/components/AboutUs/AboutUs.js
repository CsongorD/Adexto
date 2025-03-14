"use client";

import ImageLoading from "../ImageLoading/ImageLoading";
import MedalList from "../MedalList/MedalList";
import useImages from "../../hooks/useImages";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  const [medals, error] = useImages("medal");

  if (error) throw error;

  const renderMedalList = (sliceStart, sliceEnd) => {
    return medals ? (
      <MedalList medals={medals.slice(sliceStart, sliceEnd)} />
    ) : (
      <ImageLoading />
    );
  };

  return (
    <div className={styles["about-us"]}>
      {renderMedalList(0, 3)}
      <div className={styles["about-us-container"]}>
        <h1>INFORMACIJE O NAMA</h1>
        <p>
          Preduzeće Adexto d.o.o osnovano je 2007 godine u Zrenjaninu. Naša
          firma je prva na teritoriji Balkana počela sa izradom betonskih
          proizvoda novom tehnologijom—armirani vibro beton, izuzetne
          izdržljivosti i trajnosti. Takođe, jedini smo dobitnici sertifikata
          "FIRMA OD POVERENJA".
        </p>
        <h2>Naš poslovni koncept</h2>
        <p>
          Adexto će na jednostavan način ponuditi prodaju i postavljanje
          betonskih ograda.
        </p>
        <h2>Naša vizija</h2>
        <p>
          Želja nam je da vam približimo novine u betonskoj proizvodnji kroz
          asortiman naših proizvoda i da budemo još bolji.
        </p>
      </div>
      {renderMedalList(3, 6)}
    </div>
  );
};

export default AboutUs;
