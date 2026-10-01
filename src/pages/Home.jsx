import Hero from '../components/hero/Hero';
import ValueProposition from '../components/sections/ValueProposition';
import AboutPreview from '../components/sections/AboutPreview';
import SolutionsOverview from '../components/sections/SolutionsOverview';
import ResidentialSection from '../components/sections/ResidentialSection';
import SolarSection from '../components/sections/SolarSection';
import ServicesSection from '../components/sections/ServicesSection';
import ProcessSection from '../components/sections/ProcessSection';
import WhyEnermove from '../components/sections/WhyEnermove';
import VehicleChargerSection from '../components/sections/VehicleChargerSection';
import ContactSection from '../components/sections/ContactSection';
import { useSeo } from '../utils/seo';

export default function Home() {
  useSeo({
    title: 'ENERMOVE | Energía que conecta tu hogar',
    description: 'Soluciones de movilidad eléctrica, carga EV y energía limpia para hogares y empresas en Colombia.',
  });

  return (
    <div className="home-flow">
      <Hero />
      <ValueProposition />
      <AboutPreview />
      <SolutionsOverview />
      <ResidentialSection />
      <SolarSection />
      <ServicesSection />
      <ProcessSection />
      <WhyEnermove />
      <VehicleChargerSection />
      <ContactSection />
    </div>
  );
}
