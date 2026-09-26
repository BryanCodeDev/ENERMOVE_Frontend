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
          description="Cada vehículo utiliza un conector de carga. Consulta la referencia de tu carro y te orientamos hacia la alternativa compatible."
        />

        <Reveal delay={0.1} className="mt-14">
          <p className="text-center font-display text-xs font-semibold uppercase tracking-[0.22em] text-brand-charcoal/45">Marcas más buscadas</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
            {featuredBrands.map(({ brand, icon: Icon }) => (
              <span key={brand} className="inline-flex items-center gap-2.5 rounded-2xl border border-brand-line bg-white px-4 py-2.5 text-sm font-semibold text-brand-ink shadow-soft transition-colors hover:border-brand-blue hover:text-brand-blue">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-sand text-brand-blue">
                  <Icon className="h-4 w-4" />
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
