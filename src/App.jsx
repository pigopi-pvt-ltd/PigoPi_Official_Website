import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";
import WhatsAppBubble from "./Components/WhatsAppBubble";
import Footer from "./HomePageSectionComponents/Footer";
import ScrollToHash from "./Components/ScrollToHash";
import NewYearPopup from "./HomePageSectionComponents/NewYearPopup";
// import CustomCursor from './Components/CustomCursor';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  return (
    <>
      <ScrollToHash />
      <Navbar />
      <NewYearPopup />
      {/* <CustomCursor /> */}
      <Outlet />
      <Footer />
      {/* <WhatsAppBubble /> */}
    </>
  );
};

export default App;
