// Datos de compatibilidad por marca.
// ac / dc: tipo de conector · acPower / dcPower: potencia del cargador recomendado.
// Verifica cada ficha con el fabricante: varía según modelo y año.
export const featuredBrands = [
  {
    brand: 'Tesla',
    ac: 'Tipo 2',
    acPower: '11–22 kW',
    dc: 'CCS2',
    dcPower: 'Supercharger o cargador rápido CCS2',
    note: 'En Latinoamérica Tesla usa Tipo 2 + CCS2. NACS aplica solo a modelos de Norteamérica.',
  },
  { brand: 'BYD', ac: 'Tipo 2', acPower: '7–22 kW', dc: 'CCS2', dcPower: '60–120 kW' },
  { brand: 'KIA', ac: 'Tipo 2', acPower: '7–22 kW', dc: 'CCS2', dcPower: '50–150 kW' },
  {
    brand: 'Nissan',
    ac: 'Tipo 1 / Tipo 2',
    acPower: '7 kW',
    dc: 'CHAdeMO / CCS2',
    dcPower: '50 kW o más',
    note: 'Los modelos anteriores usan Tipo 1 y CHAdeMO; los nuevos incorporan Tipo 2 y CCS2.',
  },
  { brand: 'BMW', ac: 'Tipo 2', acPower: '11–22 kW', dc: 'CCS2', dcPower: '50–150 kW' },
  { brand: 'Chery', ac: 'Tipo 2', acPower: '7–22 kW', dc: 'CCS2', dcPower: '60–120 kW' },
  { brand: 'Changan', ac: 'Tipo 2', acPower: '7–22 kW', dc: 'CCS2', dcPower: '60–120 kW' },
  { brand: 'Deepal', ac: 'Tipo 2', acPower: '7–22 kW', dc: 'CCS2', dcPower: '60–120 kW' },
  { brand: 'Renault', ac: 'Tipo 2', acPower: '7–22 kW', dc: 'CCS2', dcPower: '50–130 kW' },
  { brand: 'Volvo', ac: 'Tipo 2', acPower: '11–22 kW', dc: 'CCS2', dcPower: '50–150 kW' },
  { brand: 'Dongfeng', ac: 'Tipo 2', acPower: '7–22 kW', dc: 'CCS2', dcPower: '60–120 kW' },
  { brand: 'Mini Cooper', ac: 'Tipo 2', acPower: '11 kW', dc: 'CCS2', dcPower: '50 kW' },
];

export default featuredBrands;