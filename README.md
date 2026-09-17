# ENERMOVE

Landing page corporativa premium para ENERMOVE, empresa colombiana orientada a la movilidad eléctrica y la energía limpia. Esta primera etapa es un sitio frontend informativo y preparado para conectar posteriormente un backend.

## Tecnologías

- React
- Vite
- JavaScript y JSX
- Tailwind CSS
- Framer Motion
- Lucide React
- React Router DOM

## Instalación

```bash
npm install
npm run dev
```

El proyecto queda disponible en `http://localhost:5173`.

## Comandos

```bash
npm run dev
npm run build
npm run preview
```

## Estructura

```text
src/
  components/
    layout/
    navbar/
    footer/
    hero/
    sections/
    cards/
    buttons/
    forms/
    products/
    blog/
    ui/
  pages/
  data/
  assets/
  utils/
  config/
  services/
```

Los contenidos temporales están separados en `src/data`. Las referencias de imágenes se centralizan en `src/data/images.js` para facilitar su reemplazo.

## Configuración

- El número de WhatsApp y los datos de contacto se configuran en `src/config/contact.js`.
- El formulario de cotización prepara los datos para una futura conexión con `POST /api/leads` sin realizar llamadas ficticias.
- Los textos corporativos pendientes están marcados con `[REEMPLAZAR ...]`.
- Las URLs de imágenes son referencias temporales de alta calidad y deben reemplazarse por los archivos definitivos.

## Reemplazo de imágenes

1. Guarda los archivos definitivos en `src/assets/images/`.
2. Actualiza las rutas en `src/data/images.js`.
3. Revisa los textos alternativos y el comportamiento de carga diferida.

## Reemplazo de información empresarial

Actualiza los placeholders en `src/data/company.js`, `src/data/services.js` y `src/config/contact.js` con la información oficial aprobada. No agregues certificaciones, proveedores, precios ni disponibilidad sin confirmación.

## Despliegue en Netlify

El archivo `netlify.toml` configura el build de Vite y el fallback de React Router:

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

Conecta el repositorio a Netlify y usa `npm run build` como comando de producción.
