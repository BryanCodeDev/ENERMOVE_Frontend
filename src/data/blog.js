import { images } from './images';

export const blogPosts = [
  {
    slug: 'movilidad-electrica-en-colombia',
    title: 'Movilidad eléctrica en Colombia: una transición que empieza por la información',
    excerpt: 'Conocer los usos, necesidades de carga y posibilidades de integración es el primer paso para tomar mejores decisiones.',
    category: 'Movilidad eléctrica',
    date: '2026-01-15',
    readTime: '5 min',
    image: images.blogCharging,
    alt: 'Vehículo eléctrico conectado a un punto de carga',
    content: [
      'La movilidad eléctrica es mucho más que cambiar la forma de desplazarse: también transforma la manera en que hogares, empresas y ciudades piensan el uso de la energía.',
      'Antes de elegir una solución de carga, es importante entender el tipo de vehículo, los recorridos habituales, el tiempo disponible y las condiciones del espacio. Esa información permite definir una ruta más clara y evitar decisiones apresuradas.',
      'En EnerMove vemos la información como el punto de partida para construir proyectos útiles, escalables y alineados con la transición energética.',
    ],
  },
  {
    slug: 'como-elegir-cargador-ev',
    title: 'Cómo elegir un cargador EV: variables clave antes de decidir',
    excerpt: 'Potencia, conector, ubicación y proyección de uso son algunos de los factores que ayudan a elegir una solución adecuada.',
    category: 'Cargadores EV',
    date: '2026-02-08',
    readTime: '6 min',
    image: images.blogGuide,
    alt: 'Tecnología de carga para vehículo eléctrico',
    content: [
      'Elegir un cargador para vehículo eléctrico no depende únicamente de la potencia. También influyen el tipo de conexión, el uso esperado, el espacio disponible y la posibilidad de crecer en el futuro.',
      'Una solución residencial puede priorizar la comodidad y la carga nocturna. Un proyecto empresarial, en cambio, puede requerir mayor capacidad, gestión de usuarios o planificación por etapas.',
      'El diagnóstico inicial ayuda a comparar alternativas con criterios claros y a construir una solución coherente con cada contexto.',
    ],
  },
  {
    slug: 'energia-solar-y-movilidad-electrica',
    title: 'Energía solar y movilidad eléctrica: una relación con mucho potencial',
    excerpt: 'La generación distribuida puede complementar la carga de vehículos eléctricos dentro de una estrategia energética más amplia.',
    category: 'Energía solar',
    date: '2026-03-03',
    readTime: '5 min',
    image: images.blogSolar,
    alt: 'Paneles solares como fuente de energía limpia',
    content: [
      'La energía solar y la movilidad eléctrica comparten un objetivo: hacer que el uso de la energía sea más limpio y eficiente.',
      'Integrar ambas soluciones requiere analizar generación, consumo, horarios de carga y características del proyecto. No todos los espacios tienen las mismas condiciones, pero muchos pueden empezar con una visión clara y escalable.',
      'Pensar la carga del vehículo como parte de un sistema energético abre nuevas posibilidades para hogares y empresas.',
    ],
  },
];

export const getBlogPost = (slug) => blogPosts.find((post) => post.slug === slug);
