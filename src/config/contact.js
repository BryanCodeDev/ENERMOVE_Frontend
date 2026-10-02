export const contactConfig = {
  tagline: 'Energía que conecta tu hogar',
  whatsappNumber: '573043138069',
  whatsappMessage: 'Hola, estoy interesado en conocer las soluciones de EnerMove.',
  email: 'enermovesas@gmail.com',
  phone: '+57 304 313 8069',
  phoneLink: '+573043138069',
  city: 'Bogotá',
  coverage: 'Cobertura en todo Colombia',
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
