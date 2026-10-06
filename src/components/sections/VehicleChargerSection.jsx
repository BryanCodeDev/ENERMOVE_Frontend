import { featuredBrands } from '../../data/vehicleChargers';
import { BrandLogos } from '../ui/BrandLogos';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import { memo } from 'react';

const BrandButton = memo(function BrandButton({ brand, ac, acPower, dc, dcPower, note }) {
  const Logo = BrandLogos[brand];

  return (
    <div className="group relative hover:z-20 focus-within:z-20">
      <button
        type="button"
        aria-label={`${brand}: conector ${ac} en AC y ${dc} en DC`}
        className="inline-flex items-center gap-2.5 rounded-2xl border-2 border-brand-ink/10 bg-white px-3 py-2 text-sm font-semibold text-brand-ink shadow-soft transition-colors duration-200 hover:border-brand-blue hover:text-brand-blue focus:outline-none focus-visible:border-brand-blue focus-visible:ring-2 focus-visible:ring-brand-blue/40 sm:px-4 sm:py-2.5"
      >
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-sand text-brand-blue transition-colors duration-200 group-hover:bg-brand-blue group-hover:text-white group-focus-within:bg-brand-blue group-focus-within:text-white">
          {Logo ? (
            <Logo className="h-5 w-5" aria-hidden="true" />
          ) : (
            <span className="text-sm font-bold">{brand.charAt(0)}</span>
          )}
        </span>
        <span>{brand}</span>
      </button>

      <div
        role="tooltip"
        className="pointer-events-none invisible absolute bottom-full left-1/2 z-20 mb-3 w-64 max-w-[calc(100vw-2.5rem)] -translate-x-1/2 rounded-2xl bg-brand-charcoal p-4 text-left opacity-0 shadow-xl transition-opacity duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
      >
        <p className="text-sm font-bold text-white">{brand}</p>

        <dl className="mt-3 space-y-3 text-xs">
          <div>
            <dt className="font-semibold text-brand-blue">Carga en casa (AC)</dt>
            <dd className="mt-0.5 text-white">{ac}</dd>
            <dd className="text-white/65">Cargador recomendado: {acPower}</dd>
          </div>
          <div>
            <dt className="font-semibold text-brand-blue">Carga rápida (DC)</dt>
            <dd className="mt-0.5 text-white">{dc}</dd>
            <dd className="text-white/65">Cargador recomendado: {dcPower}</dd>
          </div>
        </dl>

        {note && <p className="mt-3 border-t border-white/10 pt-3 text-[11px] leading-snug text-white/55">{note}</p>}

        <div className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-brand-charcoal" />
      </div>
    </div>
  );
});

const VehicleChargerSection = memo(function VehicleChargerSection() {
  return (
    <section className="bg-gradient-to-b from-white via-brand-sand/60 to-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-page">
        <SectionHeading
          align="center"
          eyebrow="Compatibilidad"
          title="¿Cuál es el cargador para tu carro eléctrico o híbrido?"
          description="Consulta la referencia de tu carro y te orientamos hacia el conector compatible."
        />

         <Reveal delay={0.1} className="mt-10">
          <p className="text-center font-display text-sm font-semibold text-brand-charcoal/60">
            Pasa el cursor por tu marca para ver el conector
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {featuredBrands.map((item) => (
              <BrandButton key={item.brand} {...item} />
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-brand-charcoal/50">
            El conector exacto puede variar según el modelo y el año. Confírmalo con nosotros antes de comprar.
          </p>
        </Reveal>
      </div>
    </section>
  );
});

export default VehicleChargerSection;