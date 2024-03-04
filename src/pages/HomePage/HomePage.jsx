import "./HomePage.css";

import medals from "../../data/medal_db.json";
import characteristics from "../../data/characteristic_db.json";

import Landing from "../../components/Landing/Landing";
import Characteristics from "../../components/Characteristics/Characteristics";
import AboutUs from "../../components/AboutUs/AboutUs";

const HomePage = () => {
  return (
    <div className="home-page">
      <Landing />
      <Characteristics characteristics={characteristics} />
      <AboutUs medals={medals} />
    </div>
  );
};

export default HomePage;
