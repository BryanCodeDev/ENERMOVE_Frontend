import { ArrowRight, Check, Leaf, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { images } from '../../data/images';

export default function SolarSection() {
  return (
    <section id="energia-solar" className="bg-brand-ink px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-page">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <motion.div className="relative" initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }}>
            <div className="media-frame media-frame--portrait relative overflow-hidden rounded-[1.5rem] bg-brand-line sm:rounded-[2rem]">
              <img src={images.solar} alt={images.solarAlt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 text-white sm:bottom-7 sm:left-7 sm:right-7">
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-blue sm:text-xs">Energía limpia</p>
                  <p className="mt-1 font-display text-lg font-semibold leading-tight sm:text-2xl">Genera para moverte</p>
                </div>
                <Sun className="h-7 w-7 shrink-0 text-brand-blue sm:h-9 sm:w-9" />
              </div>
            </div>
            <div className="badge-float absolute -top-4 flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3 text-brand-ink shadow-soft sm:-top-5 sm:px-5 sm:py-4">
              <Leaf className="h-5 w-5 shrink-0 text-brand-blue sm:h-6 sm:w-6" />
              <p className="font-display text-sm font-semibold">Solar + EV</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }}>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">Energía solar</p>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">Energía limpia para moverte más lejos.</h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-white/70">EnerMove busca integrar la generación solar con la carga de vehículos eléctricos para abrir una ruta más sostenible, eficiente y preparada para el futuro.</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              {['Paneles solares', 'Generación de energía', 'Carga del vehículo'].map((item, index) => (
                <div key={item} className="flex flex-1 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] px-5 py-4">
                  <span className="font-display text-xs font-semibold text-brand-blue">0{index + 1}</span>
                  <p className="font-display text-sm font-semibold">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 flex items-start gap-2.5 text-xs leading-6 text-white/55"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />La integración de instalaciones y servicios está sujeta a confirmación según el proyecto.</p>
            <Link to="/contacto" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white shadow-lift transition-all hover:-translate-y-0.5 hover:bg-brand-blueDark sm:w-auto sm:justify-start">
              Conocer la solución
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
