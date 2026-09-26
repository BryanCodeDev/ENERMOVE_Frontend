import { BatteryCharging, Car, PlugZap, Truck } from 'lucide-react';

export const vehicleChargers = [
  { brand: 'Mercedes Benz', charger: 'AC Wallbox', connector: 'Tipo 1 y 2', icon: Car, featured: true },
  { brand: 'BMW', charger: 'AC Wallbox', connector: 'Tipo 1', icon: Car, featured: true },
  { brand: 'Volvo', charger: 'AC Wallbox', connector: 'Tipo 1', icon: Car, featured: true },
  { brand: 'Land Rover', charger: 'AC Wallbox', connector: 'Tipo 1', icon: Car },
  { brand: 'Mini Cooper', charger: 'AC Wallbox', connector: 'Tipo 1 y 2', icon: Car, featured: true },
  { brand: 'Renault', charger: 'AC Wallbox', connector: 'Tipo 2', icon: Car, featured: true },
  { brand: 'Audi', charger: 'AC Wallbox', connector: 'Tipo 1', icon: Car, featured: true },
  { brand: 'Nissan', charger: 'AC Wallbox', connector: 'Tipo 1', icon: Car, featured: true },
  { brand: 'Porsche', charger: 'AC Wallbox', connector: 'Tipo 1', icon: Car, featured: true },
  { brand: 'Mitsubishi', charger: 'AC Wallbox', connector: 'Tipo 1', icon: Car },
  { brand: 'Jaguar', charger: 'AC Wallbox', connector: 'Tipo 1', icon: Car },
  { brand: 'Tesla', charger: 'Cargador propio', connector: 'Conector propietario', icon: BatteryCharging, featured: true },
  { brand: 'ZD', charger: 'AC Wallbox', connector: 'Tipo 2', icon: PlugZap },
  { brand: 'Changan', charger: 'Cargador para camión', connector: 'Camión eléctrico', icon: Truck, featured: true },
  { brand: 'Dongfeng', charger: 'Cargador chino', connector: 'Tipo chino', icon: PlugZap, featured: true },
  { brand: 'Dongfeng', charger: 'AC Wallbox', connector: 'Tipo 2', icon: PlugZap },
  { brand: 'KIA', charger: 'AC Wallbox', connector: 'Tipo 1', icon: Car, featured: true },
  { brand: 'FAW', charger: 'Cargador chino', connector: 'Tipo chino', icon: PlugZap },
  { brand: 'Deepal', charger: 'Cargador europeo', connector: 'Tipo 2 Europeo', icon: PlugZap, featured: true },
  { brand: 'Chery', charger: 'Cargador europeo', connector: 'Tipo 2 Europeo', icon: PlugZap, featured: true },
  { brand: 'BYD', charger: 'Cargador europeo', connector: 'Tipo 2 Europeo', icon: PlugZap, featured: true },
];

export const featuredBrands = vehicleChargers.filter((item) => item.featured);

export const connectorLegend = [
  { label: 'Tipo 1', text: 'Conector compacto, habitual en vehículos de走入 y híbridos.' },
  { label: 'Tipo 2', text: 'Conector europeo, estándar en la mayoría de eléctricos actuales.' },
  { label: 'Tipo 1 y 2', text: 'Wallbox con ambos conectores para cubrir varias referencias.' },
  { label: 'Tipo chino', text: 'Conector GB/T presente en vehículos importados de origen chino.' },
  { label: 'Conector propietario', text: 'Tesla utiliza su propio conector, sin compatibilidad directa con Tipo 2.' },
];
