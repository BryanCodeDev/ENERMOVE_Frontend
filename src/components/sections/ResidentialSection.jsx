import { ArrowRight, Home, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { images } from '../../data/images';

export default function ResidentialSection() {
  return (
    <section id="carga-residencial" className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-page items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <motion.div className="relative order-2 lg:order-1" initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8 }}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-brand-line sm:aspect-[5/6]">
            <img src={images.residential} alt={images.residentialAlt} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/45 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75">Hogar</p>
                <p className="mt-1 font-display text-xl font-semibold">Carga donde comienza tu día</p>
              </div>
              <span className="grid h-11 w-11 place-items-center rounded-full bg-white/20 backdrop-blur-md"><Home className="h-5 w-5" /></span>
            </div>
          </div>
          <div className="absolute -right-4 top-10 rounded-2xl bg-brand-blue px-5 py-4 text-white shadow-lift sm:-right-8">
            <Sun className="h-5 w-5 text-brand-green" />
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em]">Solar ready</p>
          </div>
        </motion.div>
        <motion.div className="order-1 lg:order-2" initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }}>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">Carga residencial</p>
          <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">Carga tu vehículo donde comienza tu día.</h2>
          <p className="mt-7 max-w-lg text-base leading-8 text-brand-charcoal/65">Una solución de carga en casa convierte la movilidad eléctrica en parte natural de tu rutina. Pensamos en la comodidad de hoy y en la integración futura con energía solar.</p>
          <ul className="mt-8 space-y-4">
            {['Comodidad para tu rutina', 'Diseño para cada espacio', 'Visión de integración solar'].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm font-medium text-brand-charcoal/80">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-green/15 text-brand-green"><ArrowRight className="h-3.5 w-3.5" /></span>{item}
              </li>
            ))}
          </ul>
          <Link to="/contacto" className="mt-9 inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white shadow-lift transition-all hover:-translate-y-0.5 hover:bg-brand-blueDark">
            Quiero conocer la solución
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
