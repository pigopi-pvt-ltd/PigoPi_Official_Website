import Services from "./Services";
import ServicesHeroSection from "./ServicesHeroSection";
import StartJourneySection from "./StartJourneySection";

const ServicesPage = () => {
  return (
    <div class="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <ServicesHeroSection />
      <Services />
      <StartJourneySection />
    </div>
  );
};

export default ServicesPage;
