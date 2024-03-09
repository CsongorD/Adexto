import "./AboutUs.css";
import ImageComponent from "../ImageComponent/ImageComponent";
import ErrorComponent from "../ErrorComponent/ErrorComponent";

const AboutUs = ({ medals }) => {
  if (!medals) {
    return <ErrorComponent text={"medals"} />;
  }

  let firstThree = medals.slice(0, 3);
  let lastThree = medals.slice(3, 6);

  return (
    <div className="about-us">
      <div className="medal-list">
        {firstThree.map((medal, index) => (
          <div className="medal" key={index}>
            <ImageComponent
              src={medal.path}
              small={medal.small}
              alt="medal"
              loading={"lazy"}
            />
          </div>
        ))}
      </div>
      <div className="about-us-container">
        <h1>INFORMACIJE O NAMA</h1>
        <p>
          Preduzeće Adexto d.o.o osnovano je 2007 godine u Zrenjaninu. Naša
          firma je prva na teritoriji balkana počela sa izradom betonskih
          proizvoda novom tehnologijom-armirani vibro beton, izuzetne
          izdržljivosti i trajnosti, a i jedini smo dobitnici sertifikata "FIRMA
          OD POVERENJA".
        </p>
        <h2>Naš poslovni koncept</h2>
        <p>
          Adexto će na jednostavan način ponuditi prodaju i postavljanje
          betonskih ograda.
        </p>
        <h2>Naša vizija</h2>
        <p>
          Želja nam je da vam približimo novine u betonskoj proizvodnji kroz
          asortiman naših proizvoda, i trudimo se da budemo uvek još bolji.
        </p>
      </div>
      <div className="medal-list">
        {lastThree.map((medal, index) => (
          <div className="medal" key={index}>
            <ImageComponent
              src={medal.path}
              small={medal.small}
              alt="medal"
              loading={"lazy"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
