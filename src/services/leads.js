import { contactConfig } from '../config/contact';

export const LEAD_ENDPOINT = '/api/leads';

const LABELS = {
  nombre: 'Nombre',
  empresa: 'Empresa',
  email: 'Email',
  telefono: 'Teléfono',
  ciudad: 'Ciudad',
  tipo: 'Tipo de solución',
};

const TYPE_LABELS = {
  residencial: 'Carga residencial',
  empresarial: 'Carga empresarial',
  infraestructura: 'Infraestructura EV',
  solar: 'Energía solar',
  integracion: 'Integración energética',
  otra: 'Otra consulta',
};

export function createLeadPayload(input) {
  return {
    nombre: input.nombre?.trim(),
    empresa: input.empresa?.trim(),
    email: input.email?.trim(),
    telefono: input.telefono?.trim(),
    ciudad: input.ciudad?.trim(),
    tipo: input.tipo,
    mensaje: input.mensaje?.trim(),
    website: input.website?.trim(),
    origen: 'landing-corporativa',
  };
}

export async function submitLead(payload) {
  const response = await fetch(LEAD_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  let data = {};
  try {
    data = await response.json();
  } catch {
    data = {};
  }

  if (!response.ok) {
    throw new Error(data.error || 'No pudimos enviar tu solicitud. Intenta de nuevo.');
  }

  return data;
}

export function buildWhatsAppMessage(payload) {
  const lines = ['Hola, acabo de enviar una solicitud de cotización desde el sitio de ENERMOVE.', ''];

  Object.entries(LABELS).forEach(([key, label]) => {
    const value = key === 'tipo' ? TYPE_LABELS[payload[key]] || payload[key] : payload[key];
    if (value) lines.push(`${label}: ${value}`);
  });

  if (payload.mensaje) lines.push('', `Mensaje: ${payload.mensaje}`);

  return lines.join('\n');
}

export function getWhatsAppUrlForLead(payload) {
  return `https://wa.me/${contactConfig.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(buildWhatsAppMessage(payload))}`;
}
