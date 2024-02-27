import "./HomePage.css";

import Header from "../../Components/Header/Header";
import Landing from "../../Components/Landing/Landing";
import Characteristics from "../../Components/Characteristics/Characteristics";
import AboutUs from "../../Components/AboutUs/AboutUs";
import Footer from "../../Components/Footer/Footer";
function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <Landing />
      <Characteristics />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default HomePage;
