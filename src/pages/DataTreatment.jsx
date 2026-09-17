import { ArrowRight, FileCheck2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Reveal from '../components/ui/Reveal';
import { useSeo } from '../utils/seo';

export default function DataTreatment() {
  useSeo({ title: 'Tratamiento de datos | ENERMOVE', description: 'Tratamiento de datos de ENERMOVE.' });
  return (
    <>
      <section className="bg-brand-sand px-5 pt-32 pb-20 sm:px-8 lg:px-12 lg:pb-28 lg:pt-40">
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs items={[{ label: 'Tratamiento de datos' }]} />
          <Reveal>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">Legal</p>
            <h1 className="mt-5 font-display text-5xl font-bold leading-tight text-brand-ink sm:text-6xl">Tratamiento de datos</h1>
            <p className="mt-7 text-base leading-8 text-brand-charcoal/65">[REEMPLAZAR CON TEXTO OFICIAL DE TRATAMIENTO DE DATOS]</p>
            <div className="mt-10 rounded-2xl border border-brand-line bg-white p-8">
              <FileCheck2 className="h-7 w-7 text-brand-green" />
              <h2 className="mt-5 font-display text-2xl font-semibold">Documento en construcción</h2>
              <p className="mt-4 text-sm leading-7 text-brand-charcoal/65">La información legal definitiva se incorporará cuando esté disponible y validada por ENERMOVE.</p>
              <Link to="/contacto" className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white"><ArrowRight className="h-4 w-4" />Contactar</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
