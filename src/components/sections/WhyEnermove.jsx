import { ArrowRight, Home, Leaf, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const items = [
  { icon: ShieldCheck, title: 'Tecnología' },
  { icon: Sparkles, title: 'Acompañamiento' },
  { icon: Home, title: 'Soluciones personalizadas' },
  { icon: Leaf, title: 'Energía limpia' },
];

export default function WhyEnermove() {
  return (
    <section className="bg-brand-ink px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-page">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="Por qué ENERMOVE" title="La energía también debe sentirse simple." />
            <Link to="/nosotros" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-brand-blue">
              Conoce nuestra visión
              <ArrowRight className="h-4 w-4 transition-transform hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map(({ icon: Icon, title }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="group flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-5 transition-colors hover:border-brand-blue/50 hover:bg-white/[0.07] sm:gap-4 sm:px-6 sm:py-7"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-blue/15 text-brand-blue transition-transform group-hover:scale-110 group-hover:rotate-3 sm:h-11 sm:w-11">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-base font-semibold leading-snug sm:text-lg">{title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
