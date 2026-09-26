import { ArrowRight, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { connectorLegend, featuredBrands, vehicleChargers } from '../../data/vehicleChargers';
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

        <div className="mt-14 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {vehicleChargers.map(({ brand, charger, connector, icon: Icon }, index) => (
            <Reveal key={`${brand}-${charger}-${connector}`} delay={(index % 6) * 0.06}>
              <div className="flex h-full items-center gap-4 border-b border-brand-line py-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-sand text-brand-blue">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-display text-base font-semibold leading-tight text-brand-ink">{brand}</p>
                  <p className="mt-1 text-sm text-brand-charcoal/60">{charger}</p>
                </div>
                <span className="shrink-0 rounded-full bg-brand-blue/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-blue">
                  {connector}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-16 rounded-2xl border border-brand-line bg-brand-sand/60 p-8">
          <div className="flex items-center gap-3">
            <Info className="h-5 w-5 text-brand-blue" />
            <h3 className="font-display text-xl font-semibold text-brand-ink">Tipos de conector</h3>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {connectorLegend.map((item) => (
              <div key={item.label}>
                <p className="text-sm font-semibold text-brand-ink">{item.label}</p>
                <p className="mt-1.5 text-sm leading-6 text-brand-charcoal/60">{item.text}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.16} className="mt-10 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center">
          <p className="text-sm text-brand-charcoal/60">¿No encuentras tu marca? Cuéntanos el modelo y el año de tu vehículo.</p>
          <Link to="/contacto" className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white shadow-lift transition-all hover:-translate-y-0.5 hover:bg-brand-blueDark">
            Validar compatibilidad
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
