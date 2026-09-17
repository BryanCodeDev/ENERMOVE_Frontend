import { ArrowRight, Check, Leaf, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { images } from '../../data/images';

export default function SolarSection() {
  return (
    <section id="energia-solar" className="bg-brand-sand px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-page">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <motion.div className="relative" initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-brand-line">
              <img src={images.solar} alt={images.solarAlt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/50 via-transparent to-transparent" />
              <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between text-white">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">Energía limpia</p>
                  <p className="mt-1 font-display text-2xl font-semibold">Genera para moverte</p>
                </div>
                <Sun className="h-9 w-9 text-brand-green" />
              </div>
            </div>
            <div className="absolute -right-3 -top-5 rounded-2xl bg-white p-5 shadow-soft sm:-right-8">
              <Leaf className="h-6 w-6 text-brand-green" />
              <p className="mt-3 font-display text-sm font-semibold">Solar + EV</p>
              <p className="mt-1 max-w-[150px] text-xs leading-5 text-brand-charcoal/60">Una visión de energía conectada</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }}>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-brand-green">Energía solar</p>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">Energía limpia para moverte más lejos.</h2>
            <p className="mt-7 max-w-lg text-base leading-8 text-brand-charcoal/65">EnerMove busca integrar la generación solar con la carga de vehículos eléctricos para abrir una ruta más sostenible, eficiente y preparada para el futuro.</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              {['Paneles solares', 'Generación de energía', 'Carga del vehículo'].map((item, index) => (
                <div key={item} className="flex-1 rounded-xl border border-brand-line bg-white p-5">
                  <span className="font-display text-xs font-semibold text-brand-green">0{index + 1}</span>
                  <p className="mt-3 font-display text-sm font-semibold">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 flex items-start gap-2.5 text-xs leading-6 text-brand-charcoal/55"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />La integración de instalaciones y servicios está sujeta a confirmación según el proyecto.</p>
            <Link to="/contacto" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-green px-6 py-3.5 text-sm font-semibold text-white shadow-lift transition-all hover:-translate-y-0.5 hover:bg-brand-greenDark">
              Conocer la solución
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
