import { useState, memo } from 'react';
import { AlertCircle, CheckCircle2, Loader2, Send, Building2, User } from 'lucide-react';
import { createLeadPayload, getWhatsAppUrlForLead, submitLead } from '../../services/leads';

const initialForm = {
  nombre: '',
  empresa: '',
  email: '',
  telefono: '',
  ciudad: '',
  tipo: '',
  mensaje: '',
  website: '',
};

const fieldClass = 'rounded-xl border border-brand-line bg-white px-4 py-3.5 text-sm font-normal normal-case tracking-normal text-brand-ink outline-none transition-colors focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10';

const QuoteForm = memo(function QuoteForm({ compact = false }) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const update = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submit = async (event) => {
    event.preventDefault();
    if (status === 'sending') return;

    setStatus('sending');
    setError('');

    const payload = createLeadPayload(form);

    try {
      await submitLead(payload);
      setStatus('sent');
      setTimeout(() => {
        window.location.assign(getWhatsAppUrlForLead(payload));
      }, 1500);
    } catch (submitError) {
      setError(submitError.message);
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className="rounded-2xl border border-brand-blue/25 bg-brand-blue/10 p-8 text-center" role="status">
        <CheckCircle2 className="mx-auto h-10 w-10 text-brand-blue" />
        <h3 className="mt-5 font-display text-2xl font-semibold text-brand-ink">Solicitud enviada.</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-brand-charcoal/65">
          Te estamos redirigiendo a WhatsApp para continuar la conversación.
        </p>
        <a
          href={getWhatsAppUrlForLead(createLeadPayload(form))}
          className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#1EBE5A]"
        >
          Abrir WhatsApp ahora
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className={`grid gap-5 ${compact ? '' : 'lg:grid-cols-2'}`}>
      <label className="sr-only" aria-hidden="true">
        No completar este campo
        <input type="text" name="website" value={form.website} onChange={update} tabIndex={-1} autoComplete="off" />
      </label>

      <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-charcoal/70">Nombre<input required name="nombre" value={form.nombre} onChange={update} className={fieldClass} placeholder="Tu nombre" /></label>
      <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-charcoal/70">
        Empresa
        <div className="grid grid-cols-2 gap-2" role="radiogroup" aria-label="Tipo de entidad">
          <button
            type="button"
            role="radio"
            aria-checked={form.empresa === 'empresa'}
            onClick={() => update({ target: { name: 'empresa', value: 'empresa' } })}
            className={`relative flex items-center justify-center gap-2 rounded-xl border-2 px-4 py-3.5 text-sm font-medium transition-all ${form.empresa === 'empresa' ? 'border-brand-blue bg-brand-blue/10 text-brand-blue' : 'border-brand-line bg-white text-brand-charcoal/60 hover:border-brand-blue/50 hover:bg-brand-blue/5'}`}
          >
            <Building2 className="h-4 w-4" aria-hidden="true" />
            <span>Empresa</span>
          </button>
          <button
            type="button"
            role="radio"
            aria-checked={form.empresa === 'persona_natural'}
            onClick={() => update({ target: { name: 'empresa', value: 'persona_natural' } })}
            className={`relative flex items-center justify-center gap-2 rounded-xl border-2 px-4 py-3.5 text-sm font-medium transition-all ${form.empresa === 'persona_natural' ? 'border-brand-blue bg-brand-blue/10 text-brand-blue' : 'border-brand-line bg-white text-brand-charcoal/60 hover:border-brand-blue/50 hover:bg-brand-blue/5'}`}
          >
            <User className="h-4 w-4" aria-hidden="true" />
            <span>Persona natural</span>
          </button>
        </div>
      </label>
      <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-charcoal/70">Email<input required type="email" name="email" value={form.email} onChange={update} className={fieldClass} placeholder="correo@empresa.com" /></label>
      <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-charcoal/70">Teléfono<input required type="tel" name="telefono" value={form.telefono} onChange={update} className={fieldClass} placeholder="Tu teléfono" /></label>
      <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-charcoal/70">Ciudad<input name="ciudad" value={form.ciudad} onChange={update} className={fieldClass} placeholder="Ciudad del proyecto" /></label>
      <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-charcoal/70">Tipo de solución<select required name="tipo" value={form.tipo} onChange={update} className={fieldClass}><option value="">Selecciona una opción</option><option value="residencial">Carga residencial</option><option value="empresarial">Carga empresarial</option><option value="infraestructura">Infraestructura EV</option><option value="solar">Energía solar</option><option value="integracion">Integración energética</option><option value="otra">Otra consulta</option></select></label>

      <label className={`${compact ? '' : 'lg:col-span-2'} grid gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-charcoal/70`}>Mensaje<textarea required name="mensaje" rows={compact ? 4 : 5} value={form.mensaje} onChange={update} className={`${fieldClass} resize-y`} placeholder="Cuéntanos sobre tu proyecto" /></label>

      {error && (
        <p role="alert" className={`${compact ? '' : 'lg:col-span-2'} flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs leading-5 text-red-700`}>
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          {error}
        </p>
      )}

      <div className={`${compact ? '' : 'lg:col-span-2'} flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between`}>
        <p className="max-w-md text-[11px] leading-5 text-brand-charcoal/45">Al enviar este formulario aceptas el tratamiento de tus datos para responder tu solicitud.</p>
        <button type="submit" disabled={status === 'sending'} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white shadow-lift transition-all hover:-translate-y-0.5 hover:bg-brand-blueDark disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0">
          {status === 'sending' ? (
            <>
              Enviando
              <Loader2 className="h-4 w-4 animate-spin" />
            </>
          ) : (
            <>
              Solicitar cotización
              <Send className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
</form>
    );
  });

export default QuoteForm;
