import { ArrowRight, Check, Home, Leaf, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { company } from '../../data/company';

const items = [
  { icon: ShieldCheck, title: 'Tecnología', text: 'Soluciones seleccionadas con criterio y visión de futuro.' },
  { icon: Sparkles, title: 'Acompañamiento', text: 'Claridad y cercanía en cada decisión del proyecto.' },
  { icon: Home, title: 'Soluciones personalizadas', text: 'Propuestas coherentes con el espacio y la necesidad real.' },
  { icon: Leaf, title: 'Energía limpia', text: 'Una ruta más sostenible para hogares y empresas.' },
];

export default function WhyEnermove() {
  return (
    <section className="bg-brand-ink px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-page">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-brand-green">Por qué ENERMOVE</p>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">La energía también debe sentirse simple.</h2>
            <p className="mt-6 max-w-md text-base leading-7 text-white/65">Unimos visión tecnológica, sostenibilidad y acompañamiento para hacer más clara la adopción de la movilidad eléctrica.</p>
            <Link to="/nosotros" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-brand-green">
              Conoce nuestra visión
              <ArrowRight className="h-4 w-4 transition-transform hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map(({ icon: Icon, title, text }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-colors hover:border-brand-green/50 hover:bg-white/[0.07]"
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-green/15 text-brand-green transition-transform group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-xs text-white/25">0{index + 1}</span>
                </div>
                <h3 className="mt-8 font-display text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mt-14 grid gap-4 border-t border-white/10 pt-10 sm:grid-cols-3">
          {[
            ['Colombia', 'Raíz local'],
            ['Energía', 'Visión limpia'],
            ['Futuro', 'Conectado'],
          ].map(([title, text]) => (
            <div key={title} className="flex items-center gap-4">
              <Check className="h-5 w-5 shrink-0 text-brand-green" />
              <div>
                <p className="font-display font-semibold">{title}</p>
                <p className="text-xs text-white/50">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
