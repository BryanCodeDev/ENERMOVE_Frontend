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
import JsonLd from '../components/ui/JsonLd';
import { useSeo, organizationSchema, webSiteSchema, localBusinessSchema } from '../utils/seo';

export default function Home() {
  useSeo({
    title: 'Cargadores para carros eléctricos en Bogotá | ENERMOVE',
    description: 'Cargadores para vehículos eléctricos e híbridos en casa y empresa, con integración solar. Solicita tu cotización en Bogotá y Colombia.',
  });

  return (
    <>
      <JsonLd id="organization-schema" data={organizationSchema} />
      <JsonLd id="website-schema" data={webSiteSchema} />
      <JsonLd id="localbusiness-schema" data={localBusinessSchema} />
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
    </>
  );
}
