import { Helmet } from "react-helmet-async";
import HomePage from "../pages/HomePage/HomePage";

const HomeLayout = () => {
  return (
    <>
      <Helmet>
      <meta property="og:site_name" content="Adexto" />
        <title>Adexto</title>
        <meta
          name="description"
          content="Naslovna..............................................."
        />
        <link rel="canonical" href="https://adexto.web.app/" />
      </Helmet>
      <HomePage />
    </>
  );
};
export default HomeLayout;
