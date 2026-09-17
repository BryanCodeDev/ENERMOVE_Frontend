export const LEAD_ENDPOINT = '/api/leads';

export function createLeadPayload(input) {
  return {
    nombre: input.nombre?.trim(),
    empresa: input.empresa?.trim(),
    email: input.email?.trim(),
    telefono: input.telefono?.trim(),
    ciudad: input.ciudad?.trim(),
    tipo: input.tipo,
    mensaje: input.mensaje?.trim(),
    origen: 'landing-corporativa',
  };
}
