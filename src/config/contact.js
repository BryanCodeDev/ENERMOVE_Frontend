export const contactConfig = {
  tagline: 'Energía que conecta tu hogar',
  whatsappNumber: '[REEMPLAZAR_CON_NUMERO_WHATSAPP]',
  whatsappMessage: 'Hola, estoy interesado en conocer las soluciones de EnerMove.',
  email: '[REEMPLAZAR_CON_EMAIL_OFICIAL]',
  phone: '[REEMPLAZAR_CON_TELEFONO]',
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
