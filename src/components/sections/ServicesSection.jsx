import { motion, useReducedMotion } from 'framer-motion';
import { services } from '../../data/services';
import SectionHeading from '../ui/SectionHeading';

export default function ServicesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-brand-sand px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-page">
        <SectionHeading
          align="center"
          eyebrow="Nuestro acompañamiento"
          title="Te acompañamos en cada etapa"
          description="De la primera conversación al seguimiento posterior."
        />

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-6 overflow-x-hidden">
          {services.map((service, index) => {
            const Icon = service.icon;
            const animation = reduceMotion
              ? {}
              : {
                  initial: { opacity: 0, y: 18 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true, margin: '-60px' },
                  transition: { duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] },
                };

            return (
              <motion.li
                key={service.slug}
                {...animation}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-brand-line bg-white px-3 py-6 text-center transition-all duration-500 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-soft sm:gap-4 sm:px-4 sm:py-7"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-blue/10 text-brand-blue transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white sm:h-14 sm:w-14">
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </span>
                <h3 className="font-display text-sm font-semibold leading-snug text-brand-ink sm:text-base">{service.title}</h3>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
