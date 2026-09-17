import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../ui/Reveal';

export default function NotFoundContent() {
  return (
    <section className="grid min-h-[70vh] place-items-center bg-brand-sand px-5 py-24 sm:px-8 lg:px-12">
      <Reveal className="max-w-2xl text-center">
        <p className="font-display text-7xl font-bold text-brand-blue">404</p>
        <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-brand-ink sm:text-5xl">Esta ruta aún no está conectada.</h1>
        <p className="mx-auto mt-6 max-w-md text-base leading-8 text-brand-charcoal/65">La página que buscas no existe o fue movida. Regresa al inicio y continúa explorando las soluciones de ENERMOVE.</p>
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <Link to="/" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white shadow-lift transition-all hover:-translate-y-0.5 hover:bg-brand-blueDark">Volver al inicio <ArrowRight className="h-4 w-4" /></Link>
          <Link to="/contacto" className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-line px-6 py-3.5 text-sm font-semibold text-brand-ink transition-all hover:border-brand-blue hover:bg-brand-blue hover:text-white">Contactar</Link>
        </div>
      </Reveal>
    </section>
  );
}
