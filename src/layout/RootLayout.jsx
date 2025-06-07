import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <div id="container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
