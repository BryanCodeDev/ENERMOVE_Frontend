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
            <Link to="/nosotros" className="mt-7 inline-flex items-center gap-2 rounded-full border border-brand-blue/25 px-5 py-3 text-sm font-semibold text-brand-blue transition-all hover:border-brand-blue hover:bg-brand-blue hover:text-white">
              Conoce EnerMove
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
          <div className="relative">
            <div className="absolute -left-6 -top-8 h-32 w-32 rounded-full bg-brand-blue/10 blur-2xl" />
            <div className="grid gap-4 sm:grid-cols-2 overflow-x-hidden">
              {company.principles.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group relative overflow-hidden rounded-2xl border border-brand-line bg-brand-sand p-5 transition-all hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-soft sm:p-7"
                >
                  <span className="absolute right-4 top-3 font-display text-3xl font-bold text-brand-blue/10 transition-transform group-hover:scale-110 group-hover:text-brand-blue/20 sm:right-5 sm:top-5 sm:text-4xl">{item.number}</span>
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-blue/15 text-brand-blue transition-transform group-hover:scale-110 group-hover:rotate-3 sm:h-12 sm:w-12">
                    <item.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </span>
                  <h3 className="mt-8 font-display text-lg font-semibold leading-tight sm:text-2xl">{item.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
