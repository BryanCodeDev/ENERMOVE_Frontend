import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ButtonLink({ to, children, variant = 'primary', className = '', icon = true, ...props }) {
  const variants = {
    primary: 'bg-brand-blue text-white shadow-lift hover:bg-brand-blueDark hover:-translate-y-0.5',
    secondary: 'border border-brand-blue/25 text-brand-blue hover:border-brand-blue hover:bg-brand-blue hover:text-white',
    dark: 'bg-brand-ink text-white hover:bg-brand-green',
    outlineLight: 'border border-white/25 text-white hover:border-brand-green hover:bg-brand-green',
  };

  return (
    <Link className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 ${variants[variant]} ${className}`} to={to} {...props}>
      {children}
      {icon && <ArrowRight className="h-4 w-4 transition-transform hover:translate-x-0.5" />}
    </Link>
  );
}
