import Landing from "../../components/Landing/Landing";
import CharacteristicList from "../../components/CharacteristicList/CharacteristicList";
import AboutUs from "../../components/AboutUs/AboutUs";

const HomePage = () => {
  return (
    <div className="home-page page-margin-top">
      <Landing />
      <CharacteristicList />
      <AboutUs />
    </div>
  );
};

export default HomePage;
