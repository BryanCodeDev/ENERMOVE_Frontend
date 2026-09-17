import { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import { createLeadPayload } from '../../services/leads';

const initialForm = {
  nombre: '',
  empresa: '',
  email: '',
  telefono: '',
  ciudad: '',
  tipo: '',
  mensaje: '',
};

export default function QuoteForm({ compact = false }) {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const update = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submit = (event) => {
    event.preventDefault();
    createLeadPayload(form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-brand-green/25 bg-brand-green/10 p-8 text-center" role="status">
        <CheckCircle2 className="mx-auto h-10 w-10 text-brand-green" />
        <h3 className="mt-5 font-display text-2xl font-semibold text-brand-ink">Gracias por escribirnos.</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-brand-charcoal/65">Hemos recibido tu solicitud de cotización. Este formulario está preparado para conectar con el canal oficial de ENERMOVE.</p>
        <button type="button" className="mt-7 rounded-full bg-brand-ink px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-brand-green" onClick={() => { setSubmitted(false); setForm(initialForm); }}>
          Enviar otra solicitud
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className={`grid gap-5 ${compact ? '' : 'lg:grid-cols-2'}`}>
      <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-charcoal/70">Nombre<input required name="nombre" value={form.nombre} onChange={update} className="rounded-xl border border-brand-line bg-white px-4 py-3.5 text-sm font-normal normal-case tracking-normal text-brand-ink outline-none transition-colors focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10" placeholder="Tu nombre" /></label>
      <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-charcoal/70">Empresa<input name="empresa" value={form.empresa} onChange={update} className="rounded-xl border border-brand-line bg-white px-4 py-3.5 text-sm font-normal normal-case tracking-normal text-brand-ink outline-none transition-colors focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10" placeholder="Nombre de la empresa" /></label>
      <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-charcoal/70">Email<input required type="email" name="email" value={form.email} onChange={update} className="rounded-xl border border-brand-line bg-white px-4 py-3.5 text-sm font-normal normal-case tracking-normal text-brand-ink outline-none transition-colors focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10" placeholder="correo@empresa.com" /></label>
      <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-charcoal/70">Teléfono<input name="telefono" value={form.telefono} onChange={update} className="rounded-xl border border-brand-line bg-white px-4 py-3.5 text-sm font-normal normal-case tracking-normal text-brand-ink outline-none transition-colors focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10" placeholder="Tu teléfono" /></label>
      <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-charcoal/70">Ciudad<input name="ciudad" value={form.ciudad} onChange={update} className="rounded-xl border border-brand-line bg-white px-4 py-3.5 text-sm font-normal normal-case tracking-normal text-brand-ink outline-none transition-colors focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10" placeholder="Ciudad del proyecto" /></label>
      <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-charcoal/70">Tipo de solución<select required name="tipo" value={form.tipo} onChange={update} className="rounded-xl border border-brand-line bg-white px-4 py-3.5 text-sm font-normal normal-case tracking-normal text-brand-ink outline-none transition-colors focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10"><option value="">Selecciona una opción</option><option value="residencial">Carga residencial</option><option value="empresarial">Carga empresarial</option><option value="infraestructura">Infraestructura EV</option><option value="solar">Energía solar</option><option value="integracion">Integración energética</option><option value="otra">Otra consulta</option></select></label>
      <label className={`${compact ? '' : 'lg:col-span-2'} grid gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-charcoal/70`}>Mensaje<textarea required name="mensaje" rows={compact ? 4 : 5} value={form.mensaje} onChange={update} className="rounded-xl border border-brand-line bg-white px-4 py-3.5 text-sm font-normal normal-case tracking-normal text-brand-ink outline-none transition-colors focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10" placeholder="Cuéntanos sobre tu proyecto" /></label>
      <div className={`${compact ? '' : 'lg:col-span-2'} flex items-center justify-between gap-4`}>
        <p className="max-w-md text-[11px] leading-5 text-brand-charcoal/45">Al enviar este formulario aceptas el tratamiento de tus datos para responder tu solicitud.</p>
        <button type="submit" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white shadow-lift transition-all hover:-translate-y-0.5 hover:bg-brand-blueDark">
          Solicitar cotización
          <Send className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}
