import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import Reveal from '../ui/Reveal';

export default function ProductGallery({ images: gallery, alt }) {
  const [active, setActive] = useState(0);

  const move = (direction) => {
    setActive((current) => (current + direction + gallery.length) % gallery.length);
  };

  return (
    <Reveal>
      <div className="overflow-hidden rounded-2xl bg-brand-line">
        <div className="relative aspect-[4/3] overflow-hidden bg-brand-line sm:aspect-[16/10]">
          <img src={gallery[active]} alt={`${alt} ${active + 1}`} className="h-full w-full object-cover transition-opacity duration-500" />
          <button type="button" onClick={() => move(-1)} aria-label="Imagen anterior" className="absolute left-4 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-brand-ink shadow-soft transition-transform hover:scale-105"><ChevronLeft className="h-5 w-5" /></button>
          <button type="button" onClick={() => move(1)} aria-label="Imagen siguiente" className="absolute right-4 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-brand-ink shadow-soft transition-transform hover:scale-105"><ChevronRight className="h-5 w-5" /></button>
          <span className="absolute bottom-4 right-4 rounded-full bg-brand-ink/80 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-md">{active + 1} / {gallery.length}</span>
        </div>
        <div className="flex gap-3 border-t border-brand-line bg-white p-4">
          {gallery.map((image, index) => (
            <button key={`${image}-${index}`} type="button" onClick={() => setActive(index)} aria-label={`Ver imagen ${index + 1}`} className={`h-16 flex-1 overflow-hidden rounded-lg border-2 transition-colors ${active === index ? 'border-brand-blue' : 'border-transparent opacity-70 hover:opacity-100'}`}>
              <img src={image} alt="" className="h-full w-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
