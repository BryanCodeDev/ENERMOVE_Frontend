export const contactConfig = {
  tagline: 'Energía que conecta tu hogar',
  whatsappNumber: '573014815460',
  whatsappMessage: 'Hola, estoy interesado en conocer las soluciones de EnerMove.',
  email: 'contacto@enermove.com',
  phone: '+57 301 481 5460',
  city: 'Bogotá',
  address: 'Carrera 7 # 71-52, Oficina 501, Bogotá, Cundinamarca',
  social: {
    instagram: 'https://instagram.com/enermove',
    linkedin: 'https://linkedin.com/company/enermove',
    facebook: 'https://facebook.com/enermove',
  },
};

export const getWhatsAppUrl = (message = contactConfig.whatsappMessage) => {
  const number = contactConfig.whatsappNumber.replace(/\D/g, '');
  if (!number || number.includes('REEMPLAZAR')) {
    return '#';
  }
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
};
