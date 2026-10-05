import { BatteryCharging, CheckCircle2, ChevronDown, ChevronUp, Search, Truck, Zap } from 'lucide-react';
import { useState, memo } from 'react';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Reveal from '../components/ui/Reveal';
import SectionHeading from '../components/ui/SectionHeading';
import JsonLd from '../components/ui/JsonLd';
import { useSeo, breadcrumbSchema, faqSchema } from '../utils/seo';
import { featuredBrands } from '../data/vehicleChargers';
import { BrandLogos } from '../components/ui/BrandLogos';

const faqs = [
  {
    question: '¿Cómo sé qué conector necesita mi vehículo eléctrico?',
    answer: 'Cada marca y modelo tiene un estándar de conector. En Colombia, lo más común es: Tipo 2 (estándar europeo) para carga AC y CCS2 para carga DC. Las marcas chinas (BYD, Chery, Changan, Deepal, Dongfeng) usan GB/T. Tesla usa NACS en América y Tipo 2/CCS2 en Europa/Colombia. Consulte la tabla de compatibilidad por marca o contáctenos para confirmar su modelo específico.',
  },
  {
    question: '¿Qué diferencia hay entre carga AC y carga DC?',
    answer: 'Carga AC (corriente alterna): el cargador entrega AC y el vehículo la convierte a DC internamente. Potencias típicas 3.7-22 kW. Ideal para hogar, oficina, carga overnight. Carga DC (corriente directa): el cargador convierte a DC y la entrega directo a la batería. Potencias 30-350 kW. Ideal para viajes, flotas, carga rápida en corredores.',
  },
  {
    question: '¿Puedo usar un cargador de mayor potencia del que acepta mi carro?',
    answer: 'Sí, el vehículo negocia la potencia máxima que puede aceptar. Si conecta un carro que acepta 11 kW a un cargador de 22 kW, cargará a 11 kW. Lo importante es que el conector sea compatible y el cargador no exceda los límites de seguridad del vehículo.',
  },
  {
    question: '¿Los cargadores portátiles sirven para carga diaria?',
    answer: 'Los cargadores portátiles (3.5-7.4 kW) son ideales como respaldo, viajes o segunda residencia. Para carga diaria en casa se recomienda un cargador fijo (wallbox) de 7-22 kW por comodidad, velocidad y seguridad (protecciones dedicadas, cable gestionado).',
  },
  {
    question: '¿Qué necesito para instalar un cargador en mi casa?',
    answer: '1) Verificación de capacidad eléctrica (contrato de potencia, estado del tablero). 2) Circuito dedicado con protecciones (magnetotérmico + diferencial tipo A o B). 3) Cableado dimensionado según potencia y distancia. 4) Punto de montaje accesible y protegido. 5) Puesta en tierra verificada. ENERMOVE incluye visita técnica y certificación RETIE.',
  },
];

const BrandItem = memo(function BrandItem({ brand, logo: Logo, connector, chargerType, isOpen, onToggle }) {
  return (
    <div className="rounded-xl border border-brand-line bg-white overflow-hidden transition-all hover:shadow-lg">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center gap-4 p-5 text-left hover:bg-brand-sand/50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-brand-sand text-brand-blue">
          <Logo className="h-6 w-6" aria-hidden="true" />
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-lg font-semibold text-brand-ink">{brand}</h3>
          <p className="mt-1 text-sm text-brand-charcoal/60 flex items-center gap-2">
            <Zap className="h-3.5 w-3.5" />
            {chargerType}
          </p>
        </div>
        {isOpen ? <ChevronUp className="h-5 w-5 text-brand-charcoal/40" /> : <ChevronDown className="h-5 w-5 text-brand-charcoal/40" />}
      </button>
      {isOpen && (
        <div className="border-t border-brand-line bg-brand-sand/30 px-5 pb-5 pt-3 grid gap-3 sm:grid-cols-2">
          <div className="flex items-center gap-2 text-sm">
            <BatteryCharging className="h-4 w-4 text-brand-blue" />
            <span className="font-medium text-brand-charcoal/70">Conector:</span>
            <span className="text-brand-charcoal/60">{connector}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Truck className="h-4 w-4 text-brand-blue" />
            <span className="font-medium text-brand-charcoal/70">Cargador:</span>
            <span className="text-brand-charcoal/60">{chargerType}</span>
          </div>
        </div>
      )}
    </div>
  );
});

export default function Compatibilidad() {
  const [searchTerm, setSearchTerm] = useState('');
  const [openBrands, setOpenBrands] = useState(new Set());

  useSeo({
    title: 'Compatibilidad de cargadores por marca | ENERMOVE',
    description: 'Consulta qué cargador y conector necesita tu carro eléctrico o híbrido. Tesla, BYD, KIA, Nissan, BMW, Chery, Changan, Deepal, Renault, Volvo, Dongfeng, Mini Cooper. Tabla completa con conectores Tipo 1, Tipo 2, CCS2, GB/T, NACS, CHAdeMO.',
    canonical: 'https://enermove.netlify.app/compatibilidad',
  });

  const breadcrumbData = breadcrumbSchema([
    { name: 'Inicio', url: 'https://enermove.netlify.app/' },
    { name: 'Compatibilidad', url: 'https://enermove.netlify.app/compatibilidad' },
  ]);
  const faqData = faqSchema(faqs);

  const filteredBrands = featuredBrands.filter(({ brand }) =>
    brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <JsonLd id="breadcrumb-schema" data={breadcrumbData} />
      <JsonLd id="faq-schema" data={faqData} />
      <section className="bg-brand-sand px-5 pt-32 pb-20 sm:px-8 lg:px-12 lg:pb-28 lg:pt-40">
        <div className="mx-auto max-w-page">
          <Breadcrumbs items={[{ label: 'Compatibilidad' }]} />
          <div className="mt-12 max-w-3xl">
            <Reveal>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">Compatibilidad</p>
              <h1 className="mt-5 font-display text-5xl font-bold leading-[1.02] tracking-tight text-brand-ink sm:text-6xl lg:text-7xl">¿Cuál es el cargador para tu carro eléctrico o híbrido?</h1>
              <p className="mt-7 text-base leading-8 text-brand-charcoal/65">Consulta la referencia de tu vehículo y te orientamos hacia el conector compatible y el cargador recomendado. Información orientativa; confirme siempre con ficha técnica de su modelo y año.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-page">
          <Reveal className="max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-charcoal/40" />
              <input
                type="search"
                placeholder="Buscar marca (ej. BYD, Tesla, KIA...)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-5 py-4 rounded-xl border border-brand-line bg-white text-brand-ink placeholder-brand-charcoal/40 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 outline-none"
                aria-label="Buscar marca de vehículo"
              />
            </div>
            <p className="mt-3 text-sm text-brand-charcoal/50">{filteredBrands.length} de {featuredBrands.length} marcas</p>
          </Reveal>

          <Reveal delay={0.1} className="mt-10">
            <div className="grid gap-4" role="list" aria-label="Marcas compatibles">
              {filteredBrands.map(({ brand, connector, chargerType }) => {
                const Logo = BrandLogos[brand];
                const isOpen = openBrands.has(brand);
                return (
                  <BrandItem
                    key={brand}
                    brand={brand}
                    logo={Logo}
                    connector={connector}
                    chargerType={chargerType}
                    isOpen={isOpen}
                    onToggle={() => setOpenBrands(prev => {
                      const next = new Set(prev);
                      if (next.has(brand)) next.delete(brand);
                      else next.add(brand);
                      return next;
                    })}
                  />
                );
              })}
            </div>
            {filteredBrands.length === 0 && (
              <div className="text-center py-12 text-brand-charcoal/60">
                <Search className="mx-auto h-10 w-10 text-brand-charcoal/30" />
                <p className="mt-3">No se encontraron marcas con "{searchTerm}"</p>
              </div>
            )}
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-sand px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-page">
          <Reveal>
            <SectionHeading align="center" eyebrow="Preguntas frecuentes" title="Lo que más consultan sobre compatibilidad" description="Respuestas rápidas para tomar la mejor decisión." />
            <div className="mt-12 max-w-3xl space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="group rounded-xl border border-brand-line bg-white p-5 open:shadow-lg transition-shadow">
                  <summary className="flex items-center justify-between cursor-pointer list-none font-display text-lg font-semibold text-brand-ink">
                    {faq.question}
                    <ChevronDown className="h-5 w-5 text-brand-charcoal/40 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="mt-4 text-brand-charcoal/65 leading-7 animate-fade-in">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-ink px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-page text-center">
          <Reveal>
            <CheckCircle2 className="mx-auto h-12 w-12 text-brand-blue" />
            <h2 className="mt-6 font-display text-3xl font-bold leading-tight sm:text-4xl">¿No encuentra su marca o modelo?</h2>
            <p className="mt-4 max-w-xl mx-auto text-white/70">Contáctenos y le confirmamos el conector y cargador ideal para su vehículo específico.</p>
            <a href="/contacto" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-7 py-4 text-sm font-semibold text-white shadow-lift transition-all hover:-translate-y-0.5 hover:bg-brand-blueDark">
              Consultar mi vehículo
              <Zap className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}