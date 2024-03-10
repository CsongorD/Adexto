import "./HomePage.css";
import { Suspense, lazy } from "react";
import { Helmet } from "react-helmet-async";
import Loading from "../../components/Loading/Loading";

import Landing from "../../components/Landing/Landing";
import Characteristics from "../../components/CharacteristicList/CharacteristicList";
import AboutUs from "../../components/AboutUs/AboutUs";

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
      <div className="home-page page-margin-top">
        <Landing />
        <Suspense fallback={<Loading />}>
          <Characteristics />
          <AboutUs />
        </Suspense>
      </div>
    </>
  );
};

export default HomePage;
