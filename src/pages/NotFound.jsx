import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Reveal from '../components/ui/Reveal';
import NotFoundContent from '../components/sections/NotFoundContent';
import { useSeo } from '../utils/seo';

export default function NotFound() {
  useSeo({
    title: 'Página no encontrada | ENERMOVE',
    description: 'La página solicitada no fue encontrada en el sitio de ENERMOVE.',
  });

  return (
    <>
      <section className="bg-brand-sand px-5 pt-32 pb-16 sm:px-8 lg:px-12 lg:pt-40">
        <div className="mx-auto max-w-page"><Breadcrumbs items={[{ label: 'Página no encontrada' }]} /></div>
      </section>
      <NotFoundContent />
    </>
  );
}
