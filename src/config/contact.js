export const contactConfig = {
  tagline: 'Energía que conecta tu hogar',
  whatsappNumber: '573014815460',
  whatsappMessage: 'Hola, estoy interesado en conocer las soluciones de EnerMove.',
  email: '[REEMPLAZAR_CON_EMAIL_OFICIAL]',
  phone: '+57 301 4815460',
  city: '[REEMPLAZAR_CON_CIUDAD]',
  address: '[REEMPLAZAR_CON_DIRECCION]',
  social: {
    instagram: '[REEMPLAZAR_CON_URL_INSTAGRAM]',
    linkedin: '[REEMPLAZAR_CON_URL_LINKEDIN]',
    facebook: '[REEMPLAZAR_CON_URL_FACEBOOK]',
  },
};

export const getWhatsAppUrl = (message = contactConfig.whatsappMessage) => {
  const number = contactConfig.whatsappNumber.replace(/\D/g, '');
  if (!number || number.includes('REEMPLAZAR')) {
    return '#';
  }
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
};
