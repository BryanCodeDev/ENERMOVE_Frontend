import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { solutions } from '../../data/solutions';
import SolutionCard from '../cards/SolutionCard';

export default function SolutionsOverview() {
  return (
    <section className="bg-brand-sand px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-page">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-brand-green">Soluciones</p>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">Soluciones para cada necesidad.</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-brand-charcoal/65">Diseñamos una ruta clara para conectar movilidad, carga y energía limpia con la realidad de cada proyecto.</p>
          </div>
          <Link to="/soluciones" className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand-blue transition-colors hover:text-brand-green">
            Explorar todas
            <ArrowRight className="h-4 w-4 transition-transform hover:translate-x-1" />
          </Link>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solutions.slice(0, 6).map((solution, index) => (
            <SolutionCard key={solution.slug} solution={solution} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
