import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { solutions } from '../../data/solutions';
import SolutionCard from '../cards/SolutionCard';
import SectionHeading from '../ui/SectionHeading';

export default function SolutionsOverview() {
  return (
    <section className="bg-brand-sand px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-page">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading eyebrow="Soluciones" title="Soluciones para cada necesidad." className="text-left" />
          <Link to="/soluciones" className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand-blue transition-colors hover:text-brand-blue">
            Ver todas las soluciones de carga EV
            <ArrowRight className="h-4 w-4 transition-transform hover:translate-x-1" />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solutions.slice(0, 6).map((solution, index) => (
            <SolutionCard key={solution.slug} solution={solution} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
