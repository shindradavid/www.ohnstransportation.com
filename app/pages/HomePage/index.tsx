import type { Route } from './+types/index';
import AboutUsSection from './components/AboutUsSection';
import HeroSection from './components/HeroSection';
import OurServicesSection from './components/OurServicesSection';

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "OHN'S Transportation: Airport pickups, Boda, Taxi, Breakdown in Kampala, Uganda",
    },
    {
      name: 'description',
      content: `Your trusted transport solution in Kampala, Uganda. Order airport pickups, safe boda boda, reliable taxi/cabs, and 24/7 breakdown services instantly via the OHN'S APP.`,
    },
  ];
}

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <OurServicesSection />
      <AboutUsSection />
    </div>
  );
};

export default HomePage;
