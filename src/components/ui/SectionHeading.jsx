import Reveal from './Reveal';

export default function SectionHeading({ eyebrow, title, description, align = 'left', className = '' }) {
  const alignments = {
    left: 'lg:text-left',
    center: 'lg:text-center',
    right: 'lg:text-right',
  };

  return (
    <Reveal className={`max-w-3xl ${alignments[align]} ${className}`}>
      {eyebrow && <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-brand-green">{eyebrow}</p>}
      <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">{title}</h2>
      {description && <p className="mt-6 text-base leading-8 text-brand-charcoal/65">{description}</p>}
    </Reveal>
  );
}
