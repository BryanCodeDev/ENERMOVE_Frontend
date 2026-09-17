import { ArrowDown, ArrowRight, Bolt, Home, Leaf, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { images } from '../../data/images';

const indicators = ['Movilidad eléctrica', 'Energía limpia', 'Soluciones inteligentes'];

export default function Hero() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 350], [0, 70]);
  const contentY = useTransform(scrollY, [0, 350], [0, -24]);

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-brand-ink text-white">
      <motion.div style={{ y: imageY }} className="absolute inset-0">
        <img src={images.hero} alt={images.heroAlt} className="h-full w-full object-cover" fetchpriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-ink via-brand-ink/70 to-brand-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-transparent to-brand-ink/35" />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,transparent,black)]" />
      <div className="relative mx-auto flex w-full max-w-page flex-col px-5 pb-16 pt-40 sm:px-8 lg:px-12 lg:pb-24 lg:pt-48">
        <motion.div style={{ y: contentY }} className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-3">
            {indicators.map((item, index) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 + index * 0.1 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] backdrop-blur-md"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                {item}
              </motion.span>
            ))}
          </div>
          <motion.h1
            className="mt-8 font-display text-5xl font-bold leading-[0.96] tracking-tight sm:text-7xl lg:text-[6.8rem]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            Energía que <span className="text-brand-green">conecta</span> tu hogar
          </motion.h1>
          <motion.p
            className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            Movilidad eléctrica y energía limpia para hogares y empresas.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.46, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to="/soluciones" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-7 py-4 text-sm font-semibold text-white shadow-lift transition-all hover:-translate-y-0.5 hover:bg-green-700">
              Conoce nuestras soluciones
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contacto" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/10">
              Solicitar cotización
            </Link>
          </motion.div>
        </motion.div>
        <motion.div className="mt-16 flex flex-wrap items-end justify-between gap-8 border-t border-white/15 pt-7" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.7 }}>
          <div className="flex gap-8 sm:gap-12">
            {[
              [Bolt, 'EV', 'Carga inteligente'],
              [Home, 'HOME', 'Soluciones residenciales'],
              [Leaf, 'SOLAR', 'Energía limpia'],
            ].map(([Icon, label, text]) => (
              <div key={label} className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-brand-green" />
                <div>
                  <p className="font-display text-xs font-bold tracking-[0.16em]">{label}</p>
                  <p className="mt-1 text-[11px] text-white/55">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <a href="#conoce-enermove" className="group inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/65 transition-colors hover:text-white">
            Explora
            <span className="grid h-8 w-8 place-items-center rounded-full border border-white/20 transition-transform group-hover:translate-y-1"><ArrowDown className="h-3.5 w-3.5" /></span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
