import { Helmet } from "react-helmet-async";
import HomePage from "../pages/HomePage/HomePage";

const HomeLayout = () => {
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
      <HomePage />
    </>
  );
};
export default HomeLayout;
