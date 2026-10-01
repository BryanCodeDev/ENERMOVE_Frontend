import { BarChart3, Boxes, ClipboardCheck, Compass, HeartHandshake, Lightbulb, PlugZap, ShieldCheck, Sun, Wrench } from 'lucide-react';

export const services = [
  {
    slug: 'asesoria',
    title: 'Asesoría especializada',
    description: 'Diagnóstico de necesidades energéticas y de movilidad. Analizamos tu consumo, tipo de vehículo, espacio disponible y objetivos para recomendar la solución óptima de carga EV e integración solar.',
    icon: Compass,
    tags: ['Diagnóstico', 'Viabilidad', 'Recomendación técnica'],
  },
  {
    slug: 'seleccion-equipos',
    title: 'Selección de equipos',
    description: 'Comparativa de fabricantes y modelos (Haceb, Wallbox, ABB, Schneider, Moreday) según conector, potencia, certificaciones y presupuesto. Entregamos ficha técnica comparativa por proyecto.',
    icon: Boxes,
    tags: ['Multi-marca', 'Comparativa', 'Ficha técnica'],
  },
  {
    slug: 'diseno-soluciones',
    title: 'Diseño de soluciones',
    description: 'Ingeniería de detalle: planos unifilares, cálculo de protecciones, dimensionamiento de cableado, coordinación con red eléctrica y diseño de integración con paneles solares existentes o nuevos.',
    icon: Lightbulb,
    tags: ['Planos unifilares', 'Cálculos', 'Integración solar'],
  },
  {
    slug: 'instalacion',
    title: 'Instalación certificada',
    description: 'Instalación eléctrica por personal certificado RETIE. Incluye puesta en marcha, pruebas de aislamiento, verificación de protecciones y entrega de acta de recepción. Cobertura nacional mediante red de instaladores aliados.',
    icon: PlugZap,
    tags: ['RETIE', 'Puesta en marcha', 'Cobertura nacional'],
  },
  {
    slug: 'mantenimiento',
    title: 'Mantenimiento y soporte',
    description: 'Planes de mantenimiento preventivo y correctivo: limpieza, verificación de torque, actualización firmware, pruebas de comunicación OCPP y gestión de garantías con fabricantes. SLA según criticidad.',
    icon: Wrench,
    tags: ['Preventivo', 'Correctivo', 'Garantías', 'SLA'],
  },
  {
    slug: 'integracion-energetica',
    title: 'Integración energética solar + EV',
    description: 'Diseño e implementación de sistemas fotovoltaicos conectados a cargadores EV con gestión inteligente de excedentes (PV excedente → carga EV). Monitoreo unificado y optimización de autoconsumo.',
    icon: Sun,
    tags: ['Fotovoltaico', 'Gestión excedentes', 'Autoconsumo', 'Monitoreo unificado'],
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
    description: 'Revisamos condiciones eléctricas, restricciones y oportunidades de implementación.',
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
    description: 'Mantenemos comunicación cercana durante la ejecución y puesta en marcha.',
    icon: ShieldCheck,
  },
];