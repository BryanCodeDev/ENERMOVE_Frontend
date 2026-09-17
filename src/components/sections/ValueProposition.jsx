import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { company } from '../../data/company';

export default function ValueProposition() {
  return (
    <section className="overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-page">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }}>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">Nuestra propuesta</p>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">El futuro de la energía empieza en casa.</h2>
            <p className="mt-7 max-w-lg text-base leading-8 text-brand-charcoal/65">EnerMove integra soluciones de movilidad eléctrica y energía limpia para ayudar a hogares y empresas a adoptar nuevas formas de consumir y utilizar la energía.</p>
            <Link to="/nosotros" className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand-blue/25 px-5 py-3 text-sm font-semibold text-brand-blue transition-all hover:border-brand-blue hover:bg-brand-blue hover:text-white">
              Conoce EnerMove
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
          <div className="relative">
            <div className="absolute -left-6 -top-8 h-32 w-32 rounded-full bg-brand-green/10 blur-2xl" />
            <div className="grid gap-4 sm:grid-cols-2">
              {company.principles.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-2xl border border-brand-line bg-brand-sand p-6 transition-all hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-soft"
                >
                  <span className="font-display text-xs font-semibold text-brand-green">{item.number}</span>
                  <h3 className="mt-7 font-display text-xl font-semibold leading-snug">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-brand-charcoal/60">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
