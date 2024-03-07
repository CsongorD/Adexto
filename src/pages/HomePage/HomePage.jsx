import "./HomePage.css";

import medals from "../../data/medal_db.json";
import characteristics from "../../data/characteristic_db.json";

import Landing from "../../components/Landing/Landing";
import Characteristics from "../../components/Characteristics/Characteristics";
import AboutUs from "../../components/AboutUs/AboutUs";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Adexto</title>
        <meta
          name="description"
          content="ADEXTO nudi vam betonske ograde sa ugradjnom vrhunskog
          kvaliteta i velikim izborom dezena."
        />
        <link rel="canonical" href="https://adexto.web.app/" />
      </Helmet>
      <div className="home-page">
        <Landing />
        <Characteristics characteristics={characteristics} />
        <AboutUs medals={medals} />
      </div>
    </>
  );
};

export default HomePage;
