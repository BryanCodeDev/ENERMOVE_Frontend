import { ArrowRight, Home, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { images } from '../../data/images';

export default function ResidentialSection() {
  return (
    <section id="carga-residencial" className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-page items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <motion.div className="relative order-2 lg:order-1" initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8 }}>
          <div className="media-frame media-frame--portrait relative overflow-hidden rounded-[1.5rem] bg-brand-line sm:rounded-[2rem]">
            <img src={images.residential} alt={images.residentialAlt} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/45 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 text-white sm:bottom-6 sm:left-6 sm:right-6">
              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/75 sm:text-xs">Hogar</p>
                <p className="mt-1 font-display text-base font-semibold leading-tight sm:text-xl">Carga donde comienza tu día</p>
              </div>
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/20 backdrop-blur-md sm:h-11 sm:w-11"><Home className="h-4 w-4 sm:h-5 sm:w-5" /></span>
            </div>
          </div>
          <div className="badge-float absolute top-8 rounded-2xl bg-brand-blue px-4 py-3 text-white shadow-lift sm:px-5 sm:py-4 sm:top-10">
            <Sun className="h-4 w-4 text-brand-blue sm:h-5 sm:w-5" />
            <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] sm:text-xs">Solar ready</p>
          </div>
        </motion.div>
        <motion.div className="order-1 lg:order-2" initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }}>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">Carga residencial</p>
          <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">Carga tu vehículo donde comienza tu día.</h2>
          <p className="mt-6 max-w-lg text-base leading-8 text-brand-charcoal/65">Una solución de carga en casa convierte la movilidad eléctrica en parte natural de tu rutina. Pensamos en la comodidad de hoy y en la integración futura con energía solar.</p>
          <Link to="/contacto" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white shadow-lift transition-all hover:-translate-y-0.5 hover:bg-brand-blueDark">
            Cotizar cargador residencial
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
