import { ArrowRight, FileCheck2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Reveal from '../components/ui/Reveal';
import JsonLd from '../components/ui/JsonLd';
import { useSeo, breadcrumbSchema } from '../utils/seo';

export default function DataTreatment() {
  useSeo({
    title: 'Tratamiento de datos personales | ENERMOVE',
    description: 'Procedimientos y políticas para el tratamiento de datos personales en ENERMOVE S.A.S. conforme a la Ley 1581 de 2012 y Decreto 1377 de 2013.',
    canonical: 'https://enermove.example/tratamiento-de-datos',
    noIndex: true,
  });

  const breadcrumbData = breadcrumbSchema([
    { name: 'Inicio', url: 'https://enermove.example/' },
    { name: 'Tratamiento de datos', url: 'https://enermove.example/tratamiento-de-datos' },
  ]);

  return (
    <>
      <JsonLd id="breadcrumb-schema" data={breadcrumbData} />
      <section className="bg-brand-sand px-5 pt-32 pb-20 sm:px-8 lg:px-12 lg:pb-28 lg:pt-40">
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs items={[{ label: 'Tratamiento de datos' }]} />
          <Reveal>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">Legal</p>
            <h1 className="mt-5 font-display text-5xl font-bold leading-tight text-brand-ink sm:text-6xl">Tratamiento de datos personales</h1>
            <p className="mt-3 text-sm text-brand-charcoal/50">Procedimientos y derechos — Ley 1581 de 2012 | Última actualización: Octubre 2026</p>
            <div className="mt-10 space-y-8 text-base leading-8 text-brand-charcoal/75">
              <section>
                <h2 className="font-display text-xl font-semibold text-brand-ink">1. Responsable</h2>
                <p>ENERMOVE S.A.S., NIT 900.XXX.XXX-X, Carrera 7 # 71-52, Of. 501, Bogotá, Cundinamarca. contacto@enermove.com | +57 301 481 5460.</p>
              </section>
              <section>
                <h2 className="font-display text-xl font-semibold text-brand-ink">2. Tipos de datos y fuentes</h2>
                <ul className="mt-3 space-y-2 list-disc list-inside">
                  <li><strong>Datos de identificación:</strong> nombre, documento, empresa, cargo (formularios web, tarjetas de presentación, eventos).</li>
                  <li><strong>Datos de contacto:</strong> email, teléfono, WhatsApp, ciudad, dirección (formularios, chats, llamadas).</li>
                  <li><strong>Datos técnicos del proyecto:</strong> tipo de vehículo, conector, potencia, ubicación de instalación, consumo energético (cotizaciones, visitas técnicas).</li>
                  <li><strong>Datos de navegación:</strong> IP, cookies, páginas visitadas, dispositivo (analytics, cookies técnicas).</li>
                </ul>
              </section>
              <section>
                <h2 className="font-display text-xl font-semibold text-brand-ink">3. Finalidades específicas</h2>
                <ol className="mt-3 space-y-2 list-decimal list-inside">
                  <li>Gestión comercial: cotizaciones, seguimiento, cierre de ventas, posventa.</li>
                  <li>Ejecución contractual: ingeniería, instalación, puesta en marcha, mantenimiento.</li>
                  <li>Comunicaciones: novedades, ofertas, recordatorios técnicos (con autorización previa).</li>
                  <li>Mejora continua: analítica de uso, satisfacción, desarrollo de productos.</li>
                  <li>Cumplimiento legal: contable, tributario, laboral, autoridades competentes.</li>
                </ol>
              </section>
              <section>
                <h2 className="font-display text-xl font-semibold text-brand-ink">4. Bases legales</h2>
                <ul className="mt-3 space-y-2 list-disc list-inside">
                  <li>Autorización expresa e informada (formularios, checkboxes, verbal grabada).</li>
                  <li>Ejecución de contrato o medidas precontractuales.</li>
                  <li>Obligación legal (contable, tributaria, regulatoria).</li>
                  <li>Interés legítimo (analítica anonimizada, prevención de fraude).</li>
                </ul>
              </section>
              <section>
                <h2 className="font-display text-xl font-semibold text-brand-ink">5. Derechos ARCO + Portabilidad</h2>
                <p>Acceso, Rectificación, Cancelación, Oposición y Portabilidad. Procedimiento: solicitud escrita a contacto@enermove.com con asunto "Derechos ARCO", adjuntando copia de documento de identidad. Respuesta en 10 días hábiles (prorrogables 5 más).</p>
              </section>
              <section>
                <h2 className="font-display text-xl font-semibold text-brand-ink">6. Encargados y transferencias</h2>
                <p>Proveedores de: hosting (AWS/Netlify), CRM, analítica (GA4), WhatsApp Business API, email transaccional, instaladores aliados. Contratos con cláusulas de confidencialidad, seguridad y prohibición de uso secundario. No hay transferencias internacionales sin garantías adecuadas.</p>
              </section>
              <section>
                <h2 className="font-display text-xl font-semibold text-brand-ink">7. Medidas de seguridad</h2>
                <ul className="mt-3 space-y-2 list-disc list-inside">
                  <li>Cifrado TLS 1.2+ en tránsito; cifrado en reposo (AES-256).</li>
                  <li>Control de acceso por roles, MFA en consolas admin.</li>
                  <li>Backups diarios, retención 90 días, pruebas de restauración trimestrales.</li>
                  <li>Registro de accesos, alertas de anomalías, plan de respuesta a incidentes.</li>
                </ul>
              </section>
              <section>
                <h2 className="font-display text-xl font-semibold text-brand-ink">8. Vigencia y supresión</h2>
                <p>Datos de clientes: mientras dure la relación contractual + 5 años (prescripción contractual). Datos de prospectos sin convertir: 2 años desde último contacto. Datos de navegación: 14 meses (GA4). Supresión automática o a solicitud.</p>
              </section>
              <section>
                <h2 className="font-display text-xl font-semibold text-brand-ink">9. Contacto DPO / Área de datos</h2>
                <p>EnerMove no tiene DPO obligatorio; el responsable del tratamiento atiende consultas: <a href="mailto:contacto@enermove.com" className="text-brand-blue underline">contacto@enermove.com</a> | Asunto: "Protección de datos".</p>
              </section>
            </div>
            <div className="mt-10 rounded-2xl border border-brand-line bg-white p-8">
              <FileCheck2 className="h-7 w-7 text-brand-blue" />
              <h2 className="mt-5 font-display text-2xl font-semibold">¿Necesita ejercer sus derechos?</h2>
              <p className="mt-4 text-sm leading-7 text-brand-charcoal/65">Envíe su solicitud a <a href="mailto:contacto@enermove.com" className="text-brand-blue underline">contacto@enermove.com</a> con asunto "Derechos ARCO".</p>
              <Link to="/contacto" className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white"><ArrowRight className="h-4 w-4" />Solicitar información</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}