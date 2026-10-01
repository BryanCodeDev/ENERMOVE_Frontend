import Reveal from './Reveal';

export default function SectionHeading({ eyebrow, title, description, align = 'left', inverted = false, className = '' }) {
  const alignments = {
    left: 'text-left',
    center: 'mx-auto text-center',
    right: 'ml-auto text-right',
  };
  const textAlign = alignments[align];

  return (
    <Reveal className={`max-w-3xl ${textAlign} ${className}`}>
      {eyebrow && <p className={`font-display text-xs font-semibold uppercase tracking-[0.22em] sm:text-sm ${inverted ? 'text-white' : 'text-brand-blue'}`}>{eyebrow}</p>}
      <h2 className={`mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:mt-5 sm:text-5xl lg:text-6xl ${inverted ? 'text-white' : 'text-brand-ink'}`}>{title}</h2>
      {description && <p className={`mx-auto mt-4 max-w-2xl text-[15px] leading-7 sm:mt-6 sm:text-base sm:leading-8 ${inverted ? 'text-white/75' : 'text-brand-charcoal/65'}`}>{description}</p>}
    </Reveal>
  );
}
