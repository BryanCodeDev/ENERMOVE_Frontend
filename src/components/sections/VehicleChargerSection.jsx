import { featuredBrands } from '../../data/vehicleChargers';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';

export default function VehicleChargerSection() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-page">
        <SectionHeading
          align="center"
          eyebrow="Compatibilidad"
          title="¿Cuál es el cargador para tu carro eléctrico o híbrido?"
          description="Consulta la referencia de tu carro y te orientamos hacia el conector compatible."
        />

        <Reveal delay={0.1} className="mt-10">
          <p className="text-center font-display text-xs font-semibold uppercase tracking-[0.22em] text-brand-charcoal/45">Marcas más buscadas</p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
            {featuredBrands.map(({ brand, icon: Icon }) => (
              <span key={brand} className="inline-flex items-center gap-2 rounded-2xl border border-brand-line bg-white px-3 py-2 text-xs font-semibold text-brand-ink shadow-soft transition-colors hover:border-brand-blue hover:text-brand-blue sm:gap-2.5 sm:px-4 sm:py-2.5 sm:text-sm">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-brand-sand text-brand-blue sm:h-8 sm:w-8">
                  <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </span>
                {brand}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
