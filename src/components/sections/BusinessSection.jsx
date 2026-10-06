import { ArrowRight, Building2, MapPin, Trees } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { images } from '../../data/images';
import SectionHeading from '../ui/SectionHeading';
import ButtonLink from '../buttons/ButtonLink';

const cases = [
  { icon: Building2, title: 'Empresas' },
  { icon: MapPin, title: 'Parqueaderos' },
  { icon: Trees, title: 'Conjuntos' },
];

export default function BusinessSection() {
  return (
    <section id="carga-empresarial" className="bg-brand-ink px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-page">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }}>
            <SectionHeading eyebrow="Soluciones empresariales" title="Infraestructura para la movilidad del futuro." />
            <p className="mt-6 max-w-lg text-base leading-8 text-white/65">Analizamos el contexto de tu proyecto para proponer una solución de carga coherente con los usos, las personas y la proyección del espacio.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {cases.map(({ icon: Icon, title }) => (
                <div key={title} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                  <Icon className="h-5 w-5 shrink-0 text-brand-blue" />
                  <p className="mt-3 font-display text-sm font-semibold">{title}</p>
                </div>
              ))}
            </div>
            <ButtonLink to="/contacto" variant="outlineLight" className="mt-8">Solicitar asesoría</ButtonLink>
          </motion.div>
          <motion.div className="relative overflow-x-clip" initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }}>
            <div className="media-frame media-frame--portrait relative overflow-hidden rounded-[1.5rem] bg-brand-line sm:rounded-[2rem]">
              <img src={images.business} alt="" aria-hidden="true" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/65 via-brand-ink/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-7 sm:left-7 sm:right-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-blue sm:text-xs">Proyectos que avanzan</p>
                <p className="mt-2 font-display text-lg font-semibold leading-tight sm:text-2xl">Carga con visión de futuro</p>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-3 max-w-[70%] rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md sm:-bottom-6 sm:-left-10 sm:max-w-none sm:p-5">
              <p className="font-display text-2xl font-bold text-brand-blue sm:text-3xl">B2B</p>
              <p className="mt-1 text-[11px] leading-5 text-white/70 sm:text-xs">Acompañamiento para decisiones estratégicas</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
