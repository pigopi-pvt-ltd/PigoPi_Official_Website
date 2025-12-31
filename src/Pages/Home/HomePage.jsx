import React from "react";
import Home from "../Home/Home";
import Services from "../Home/Services";
import Features from "../../Components/Features";
import TechStack from "../../Components/TechStack";
import Events from "../../Components/Events";
import Review from "../../Components/Review";
import FAQ from "../../Components/FAQ";
import DataForm from "../../Components/DataForm";
import Map from "../../Components/Map";
import ProjectCards from "../../Components/ProjectCards";
import Logo from "../../assets/services/image6.jpg";
import AboutSection from "../../HomePageSectionComponents/AboutSection";
import ServicesSection from "../../HomePageSectionComponents/ServicesSection";
import ProcessSection from "../../HomePageSectionComponents/ProcessSection";
import ImpactSection from "../../HomePageSectionComponents/ImpactSection";
import WorkSection from "../../HomePageSectionComponents/WorksSection";
import TechSection from "../../HomePageSectionComponents/TechSection";
import TechSectionMobile from "../../HomePageSectionComponents/TechSectionMobile";
import SelectedWorks from "../../HomePageSectionComponents/SelectedWorks";
import ContactAndFooter from "../../HomePageSectionComponents/ContactFooter";
import Footer from "../../HomePageSectionComponents/Footer";
// import TechSection from "../../HomePageSectionComponents/TechSectionMobile";

const MainHome = () => (
  <>
    <Home />
    <div className="bg-background-light relative text-slate-800 font-sans transition-colors duration-300">
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <ImpactSection />
      <SelectedWorks />
      <TechSection />
      <TechSectionMobile />
      <FAQ />
      <ContactAndFooter />
      {/* <Footer /> */}
    </div>
    {/* <Services /> */}
    {/* <Features /> */}
    {/* <TechStack /> */}
    {/* <ProjectCards /> */}
    {/* <Events /> */}
    {/* <Review /> */}
    {/* <FAQ /> */}
    {/* <DataForm /> */}
    {/* <Map/> */}
  </>
);

export default MainHome;
