import { ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Reveal from '../components/ui/Reveal';
import JsonLd from '../components/ui/JsonLd';
import { useSeo, breadcrumbSchema } from '../utils/seo';
import ButtonLink from '../components/buttons/ButtonLink';

export default function PrivacyPolicy() {
  useSeo({
    title: 'Política de privacidad | ENERMOVE',
    description: 'Política de privacidad y protección de datos personales de ENERMOVE S.A.S. conforme a la Ley 1581 de 2012 y Decreto 1377 de 2013.',
    canonical: 'https://enermove.netlify.app/politica-de-privacidad',
    noIndex: true,
  });

  const breadcrumbData = breadcrumbSchema([
    { name: 'Inicio', url: 'https://enermove.netlify.app/' },
    { name: 'Política de privacidad', url: 'https://enermove.netlify.app/politica-de-privacidad' },
  ]);

  return (
    <>
      <JsonLd id="breadcrumb-schema" data={breadcrumbData} />
      <section className="bg-brand-sand px-5 pt-32 pb-20 sm:px-8 lg:px-12 lg:pb-28 lg:pt-40">
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs items={[{ label: 'Política de privacidad' }]} />
          <Reveal>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">Legal</p>
            <h1 className="mt-5 font-display text-5xl font-bold leading-tight text-brand-ink sm:text-6xl">Política de privacidad</h1>
            <p className="mt-3 text-sm text-brand-charcoal/50">Última actualización: Octubre 2026</p>
            <div className="mt-10 space-y-8 text-base leading-8 text-brand-charcoal/75">
              <section>
                <h2 className="font-display text-xl font-semibold text-brand-ink">1. Responsable del tratamiento</h2>
                <p>ENERMOVE S.A.S., identificada con NIT 900.XXX.XXX-X, con domicilio principal en Bogotá, D.C., Colombia, y cobertura en todo el territorio nacional. Correo: enermovesas@gmail.com | Tel: +57 304 313 8069.</p>
              </section>
              <section>
                <h2 className="font-display text-xl font-semibold text-brand-ink">2. Datos recolectados</h2>
                <p>Recolectamos datos personales que usted nos proporciona voluntariamente al usar nuestro sitio web, formularios de contacto, cotizaciones o canales de atención: nombre, empresa, correo electrónico, teléfono, ciudad, tipo de proyecto y mensaje. También podemos recolectar datos de navegación (IP, cookies, páginas visitadas) para mejorar la experiencia y analítica.</p>
              </section>
              <section>
                <h2 className="font-display text-xl font-semibold text-brand-ink">3. Finalidad del tratamiento</h2>
                <ul className="mt-3 space-y-2 list-disc list-inside">
                  <li>Responder solicitudes de información, cotizaciones y consultas técnicas.</li>
                  <li>Enviar comunicaciones comerciales, ofertas y novedades (previa autorización).</li>
                  <li>Gestionar relaciones contractuales y posventa.</li>
                  <li>Mejorar nuestros servicios y experiencia de usuario.</li>
                  <li>Cumplir obligaciones legales y regulatorias.</li>
                </ul>
              </section>
              <section>
                <h2 className="font-display text-xl font-semibold text-brand-ink">4. Derechos del titular</h2>
                <p>Usted tiene derecho a conocer, actualizar, rectificar y suprimir sus datos personales, revocar la autorización y presentar quejas ante la Superintendencia de Industria y Comercio. Para ejercer sus derechos, escríbanos a enermovesas@gmail.com con el asunto "Derechos ARCO".</p>
              </section>
              <section>
                <h2 className="font-display text-xl font-semibold text-brand-ink">5. Seguridad y conservación</h2>
                <p>Implementamos medidas técnicas, organizativas y legales razonables para proteger sus datos contra acceso no autorizado, pérdida o alteración. Conservamos sus datos mientras sea necesario para las finalidades descritas o mientras exista obligación legal.</p>
              </section>
              <section>
                <h2 className="font-display text-xl font-semibold text-brand-ink">6. Transferencia y terceros</h2>
                <p>No vendemos ni alquilamos sus datos. Podemos compartirlos con proveedores de servicios (hosting, analítica, CRM, WhatsApp Business API) bajo cláusulas de confidencialidad y solo para los fines autorizados.</p>
              </section>
              <section>
                <h2 className="font-display text-xl font-semibold text-brand-ink">7. Cookies y tecnologías similares</h2>
                <p>Usamos cookies propias y de terceros para funcionamiento esencial, analítica y preferencias. Puede configurar su navegador para rechazarlas, aunque algunas funciones del sitio podrían no estar disponibles.</p>
              </section>
              <section>
                <h2 className="font-display text-xl font-semibold text-brand-ink">8. Vigencia y cambios</h2>
                <p>Esta política rige desde su publicación. Cualquier modificación se notificará en esta página con fecha de actualización.</p>
              </section>
            </div>
            <div className="mt-10 rounded-2xl border border-brand-line bg-white p-8">
              <ShieldCheck className="h-7 w-7 text-brand-blue" />
              <h2 className="mt-5 font-display text-2xl font-semibold">¿Tiene dudas sobre sus datos?</h2>
              <p className="mt-4 text-sm leading-7 text-brand-charcoal/65">Escríbanos a <a href="mailto:enermovesas@gmail.com" className="text-brand-blue underline">enermovesas@gmail.com</a> o contáctenos por WhatsApp.</p>
              <ButtonLink to="/" variant="primary">Volver a ENERMOVE</ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}