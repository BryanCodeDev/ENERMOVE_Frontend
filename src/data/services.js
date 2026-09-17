import { BarChart3, Boxes, ClipboardCheck, Compass, HeartHandshake, Lightbulb, PlugZap, ShieldCheck, Sun, Wrench } from 'lucide-react';

export const services = [
  {
    slug: 'asesoria',
    title: 'Asesoría',
    description: '[REEMPLAZAR CON DESCRIPCIÓN OFICIAL] Orientamos la toma de decisiones con información clara y útil.',
    icon: Compass,
    tags: ['Diagnóstico', 'Claridad'],
  },
  {
    slug: 'seleccion-equipos',
    title: 'Selección de equipos',
    description: '[REEMPLAZAR CON DESCRIPCIÓN OFICIAL] Comparamos alternativas según el contexto de cada proyecto.',
    icon: Boxes,
    tags: ['Referencias', 'Compatibilidad'],
  },
  {
    slug: 'diseno-soluciones',
    title: 'Diseño de soluciones',
    description: '[REEMPLAZAR CON DESCRIPCIÓN OFICIAL] Definimos una ruta coherente entre necesidad, espacio y tecnología.',
    icon: Lightbulb,
    tags: ['Proyecto', 'Escalabilidad'],
  },
  {
    slug: 'instalacion',
    title: 'Instalación',
    description: '[REEMPLAZAR CON ALCANCE OFICIAL] Servicio sujeto a confirmación y condiciones del proyecto.',
    icon: PlugZap,
    tags: ['Por confirmar', 'Seguridad'],
  },
  {
    slug: 'mantenimiento',
    title: 'Mantenimiento',
    description: '[REEMPLAZAR CON ALCANCE OFICIAL] Acompañamiento posterior sujeto a disponibilidad y cobertura.',
    icon: Wrench,
    tags: ['Seguimiento', 'Confianza'],
  },
  {
    slug: 'integracion-energetica',
    title: 'Integración energética',
    description: '[REEMPLAZAR CON DESCRIPCIÓN OFICIAL] Conectamos carga, energía solar y objetivos de sostenibilidad.',
    icon: Sun,
    tags: ['Visión integral', 'Energía limpia'],
  },
];

export const processSteps = [
  {
    number: '01',
    title: 'Conocemos tu necesidad',
    description: 'Escuchamos el contexto, los usos esperados y los objetivos del proyecto.',
    icon: HeartHandshake,
  },
  {
    number: '02',
    title: 'Analizamos tu proyecto',
    description: 'Revisamos condiciones, restricciones y oportunidades de implementación.',
    icon: BarChart3,
  },
  {
    number: '03',
    title: 'Diseñamos la solución',
    description: 'Proponemos una ruta clara y escalable para cada necesidad.',
    icon: Lightbulb,
  },
  {
    number: '04',
    title: 'Seleccionamos la tecnología',
    description: 'Priorizamos alternativas coherentes con el uso, el espacio y la proyección.',
    icon: ClipboardCheck,
  },
  {
    number: '05',
    title: 'Acompañamos la implementación',
    description: 'Mantenemos una comunicación cercana durante la ejecución del proyecto.',
    icon: ShieldCheck,
  },
];
