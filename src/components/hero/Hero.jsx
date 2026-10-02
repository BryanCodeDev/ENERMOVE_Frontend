import { ArrowDown, ArrowRight, Bolt, Home, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { images } from '../../data/images';

export default function Hero() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 350], [0, 70]);
  const contentY = useTransform(scrollY, [0, 350], [0, -24]);

  return (
    <section className="home-hero relative flex min-h-[88svh] sm:min-h-[90svh] items-end overflow-hidden bg-brand-ink text-white">
      <motion.div style={{ y: imageY }} className="absolute inset-0">
        <img src={images.hero} alt={images.heroAlt} className="h-full w-full object-cover" fetchpriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-ink via-brand-ink/70 to-brand-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-transparent to-brand-ink/35" />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,transparent,black)]" />
      <div className="relative mx-auto flex w-full max-w-page flex-col px-[clamp(1rem,4vw,3rem)] pb-10 pt-28 sm:pb-14 sm:pt-32 lg:pt-40">
        <motion.div style={{ y: contentY }} className="max-w-4xl">
          <motion.h1
            className="font-display text-4xl font-bold leading-[0.98] tracking-tight sm:text-5xl lg:text-[5.4rem]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            Energía que <span className="text-brand-blue">conecta</span> tu hogar
          </motion.h1>
          <motion.p
            className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            Movilidad eléctrica y energía limpia para hogares y empresas.
          </motion.p>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.46, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to="/soluciones" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white shadow-lift transition-all hover:-translate-y-0.5 hover:bg-brand-blueDark sm:w-auto sm:justify-start">
              Conoce nuestras soluciones
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-between gap-x-8 gap-y-6 border-t border-white/15 pt-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="flex flex-wrap gap-x-6 gap-y-4 sm:gap-x-9">
            {[
              [Bolt, 'EV', 'Carga inteligente'],
              [Home, 'HOME', 'Soluciones residenciales'],
              [Leaf, 'SOLAR', 'Energía limpia'],
            ].map(([Icon, label, text]) => (
              <div key={label} className="flex items-center gap-2.5">
                <Icon className="h-4 w-4 shrink-0 text-brand-blue" />
                <div>
                  <p className="font-display text-[10px] font-bold tracking-[0.16em] sm:text-xs">{label}</p>
                  <p className="mt-0.5 text-[10px] text-white/55 sm:text-[11px]">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <a href="#conoce-enermove" className="group inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/65 transition-colors hover:text-white sm:text-xs">
            Explora
            <span className="grid h-8 w-8 place-items-center rounded-full border border-white/20 transition-transform group-hover:translate-y-1"><ArrowDown className="h-3.5 w-3.5" /></span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
