import "./AboutUs.css";
import ImageComponent from "../ImageComponent/ImageComponent";

const AboutUs = ({ medals }) => {
  return (
    <div className="about-us">
      <div className="medal-list">
        <div className="medal">
          <ImageComponent
            src={medals[0].path}
            small={medals[0].small}
            alt="medal"
            loading={"lazy"}
          />
        </div>
        <div className="medal">
          <ImageComponent
            src={medals[1].path}
            small={medals[1].small}
            alt="medal"
            loading={"lazy"}
          />
        </div>
        <div className="medal">
          <ImageComponent
            src={medals[2].path}
            small={medals[2].small}
            alt="medal"
            loading={"lazy"}
          />
        </div>
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
        <div className="medal">
          <ImageComponent
            src={medals[3].path}
            small={medals[3].small}
            alt="medal"
            loading={"lazy"}
          />
        </div>
        <div className="medal">
          <ImageComponent
            src={medals[4].path}
            small={medals[4].small}
            alt="medal"
            loading={"lazy"}
          />
        </div>
        <div className="medal">
          <ImageComponent
            src={medals[5].path}
            small={medals[5].small}
            alt="medal"
            loading={"lazy"}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
