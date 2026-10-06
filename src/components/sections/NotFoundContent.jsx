import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../ui/Reveal';
import ButtonLink from '../buttons/ButtonLink';

export default function NotFoundContent() {
  return (
    <section className="grid min-h-[70vh] place-items-center bg-brand-sand px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <Reveal className="max-w-2xl text-center">
        <p className="font-display text-7xl font-bold text-brand-blue">404</p>
        <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-brand-ink sm:text-5xl">Esta ruta aún no está conectada.</h1>
        <p className="mx-auto mt-6 max-w-md text-base leading-8 text-brand-charcoal/65">La página que buscas no existe o fue movida. Regresa al inicio y continúa explorando las soluciones de ENERMOVE.</p>
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <ButtonLink to="/" variant="primary">Volver a ENERMOVE</ButtonLink>
          <ButtonLink to="/contacto" variant="secondary">Solicitar ayuda</ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
