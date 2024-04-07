import useImages from "../../hooks/useImages";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import ImageLoading from "../ImageLoading/ImageLoading";
import MedalList from "../MedalList/MedalList";
import "./AboutUs.css";

const AboutUs = () => {
  const [medals, error] = useImages("medal");
  if (error) {
    return <ErrorComponent error={error.message} />;
  }
  const renderMedalList = (medals, sliceStart, sliceEnd) => {
    if (!medals) {
      return <ImageLoading />;
    }

    const slicedMedals = medals?.slice(sliceStart, sliceEnd);
    return <MedalList medals={slicedMedals} />;
  };

  return (
    <div className="about-us">
      {renderMedalList(medals, 0, 3)}
      <div className="about-us-container">
        <h1 role="presentation">INFORMACIJE O NAMA</h1>
        <p>
          Preduzeće Adexto d.o.o osnovano je 2007 godine u Zrenjaninu. Naša
          firma je prva na teritoriji balkana počela sa izradom betonskih
          proizvoda novom tehnologijom-armirani vibro beton, izuzetne
          izdržljivosti i trajnosti, a i jedini smo dobitnici sertifikata "FIRMA
          OD POVERENJA".
        </p>
        <h2 role="presentation">Naš poslovni koncept</h2>
        <p>
          Adexto će na jednostavan način ponuditi prodaju i postavljanje
          betonskih ograda.
        </p>
        <h2 role="presentation">Naša vizija</h2>
        <p>
          Želja nam je da vam približimo novine u betonskoj proizvodnji kroz
          asortiman naših proizvoda, i trudimo se da budemo uvek još bolji.
        </p>
      </div>
      {renderMedalList(medals, 3, 6)}
    </div>
  );
};

export default AboutUs;
