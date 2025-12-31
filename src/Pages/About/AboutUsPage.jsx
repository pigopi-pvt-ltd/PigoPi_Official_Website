import AboutUsHero from "./AboutUsHero";
import Journey from "./Journey";
import Mission from "./Mission";

const AboutUsPage = () => {
  return (
    <>
      <div className="bg-slate-50 mt-7 text-slate-900 font-sans transition-colors duration-300">
        <AboutUsHero />
        <Mission />
        <Journey />
      </div>
    </>
  );
};
export default AboutUsPage;
