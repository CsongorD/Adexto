import "./HomePage.css";

import Header from "../../Components/Header/Header";
import Landing from "../../Components/Landing/Landing";
import Characteristics from "../../Components/Characteristics/Characteristics";
import AboutUs from "../../Components/AboutUs/AboutUs";
import Footer from "../../Components/Footer/Footer";

import medals from "../../assets/db/medal_db.json";
import characteristics from "../../assets/db/characteristic_db.json";

function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <Landing />
      <Characteristics characteristics={characteristics} />
      <AboutUs medals={medals} />
      <Footer />
    </div>
  );
}

export default HomePage;
