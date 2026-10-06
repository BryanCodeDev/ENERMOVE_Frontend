import { company } from '../../data/company';
import { images } from '../../data/images';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import ButtonLink from '../buttons/ButtonLink';

export default function AboutPreview() {
  return (
    <section id="conoce-enermove" className="bg-brand-sand px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-page">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <div className="media-frame media-frame--portrait relative overflow-hidden rounded-[1.5rem] bg-brand-line sm:rounded-[2rem]">
              <img src={images.team} alt={images.teamAlt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/55 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white sm:bottom-7 sm:left-7 sm:right-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-blue sm:text-xs">Colombia</p>
                <p className="mt-2 font-display text-lg font-semibold leading-tight sm:text-2xl">Innovación con propósito</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <SectionHeading eyebrow="Nosotros" title="Estamos construyendo una nueva forma de movernos." />
            <p className="mt-6 max-w-xl text-base leading-8 text-brand-charcoal/65">{company.description}</p>
            <ButtonLink to="/nosotros" variant="secondary">Conoce nuestra visión</ButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
