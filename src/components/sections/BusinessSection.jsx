import { ArrowRight, Building2, MapPin, Trees } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { images } from '../../data/images';

const cases = [
  { icon: Building2, title: 'Empresas', text: 'Experiencias de carga para colaboradores y visitantes.' },
  { icon: MapPin, title: 'Parqueaderos', text: 'Infraestructura pensada para uso frecuente y crecimiento.' },
  { icon: Trees, title: 'Conjuntos', text: 'Soluciones compartidas para nuevas comunidades.' },
];

export default function BusinessSection() {
  return (
    <section id="carga-empresarial" className="bg-brand-ink px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-page">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }}>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-brand-green">Soluciones empresariales</p>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">Infraestructura para la movilidad del futuro.</h2>
            <p className="mt-7 max-w-lg text-base leading-8 text-white/65">Analizamos el contexto de tu proyecto para proponer una solución de carga coherente con los usos, las personas y la proyección del espacio.</p>
            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {cases.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                  <Icon className="h-5 w-5 text-brand-green" />
                  <p className="mt-4 font-display text-sm font-semibold">{title}</p>
                  <p className="mt-2 text-xs leading-5 text-white/55">{text}</p>
                </div>
              ))}
            </div>
            <Link to="/contacto" className="mt-9 inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold transition-all hover:border-brand-green hover:bg-brand-green hover:text-white">
              Solicitar asesoría
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
          <motion.div className="relative" initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-brand-line">
              <img src={images.business} alt={images.businessAlt} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/65 via-brand-ink/10 to-transparent" />
              <div className="absolute bottom-7 left-7 right-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">Proyectos que avanzan</p>
                <p className="mt-2 font-display text-2xl font-semibold">Carga con visión de futuro</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md sm:-left-10">
              <p className="font-display text-3xl font-bold text-brand-green">B2B</p>
              <p className="mt-1 text-xs leading-5 text-white/70">Acompañamiento para decisiones estratégicas</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
