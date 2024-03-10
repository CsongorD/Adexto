import "./RootLayout.css";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
