import { ArrowRight, Check, Sun, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/hero/Hero';
import ValueProposition from '../components/sections/ValueProposition';
import AboutPreview from '../components/sections/AboutPreview';
import SolutionsOverview from '../components/sections/SolutionsOverview';
import ResidentialSection from '../components/sections/ResidentialSection';
import BusinessSection from '../components/sections/BusinessSection';
import SolarSection from '../components/sections/SolarSection';
import ServicesSection from '../components/sections/ServicesSection';
import ProcessSection from '../components/sections/ProcessSection';
import WhyEnermove from '../components/sections/WhyEnermove';
import BlogPreview from '../components/sections/BlogPreview';
import ContactSection from '../components/sections/ContactSection';
import CTASection from '../components/sections/CTASection';
import { useSeo } from '../utils/seo';

export default function Home() {
  useSeo({
    title: 'ENERMOVE | Energía que conecta tu hogar',
    description: 'Soluciones de movilidad eléctrica, carga EV y energía limpia para hogares y empresas en Colombia.',
  });

  return (
    <>
      <Hero />
      <ValueProposition />
      <AboutPreview />
      <SolutionsOverview />
      <ResidentialSection />
      <BusinessSection />
      <SolarSection />
      <ServicesSection />
      <ProcessSection />
      <WhyEnermove />
      <BlogPreview />
      <ContactSection />
      <CTASection />
    </>
  );
}
