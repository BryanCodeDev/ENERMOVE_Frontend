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
- El formulario de cotización envía los datos a `POST /api/leads`, que es una Netlify Function connected a Resend. Al enviar correctamente redirige a WhatsApp con el resumen del formulario.
- Los textos corporativos pendientes están marcados con `[REEMPLAZAR ...]`.
- Las URLs de imágenes son referencias temporales de alta calidad y deben reemplazarse por los archivos definitivos.

## Reemplazo de imágenes

1. Guarda los archivos definitivos en `src/assets/images/`.
2. Actualiza las rutas en `src/data/images.js`.
3. Revisa los textos alternativos y el comportamiento de carga diferida.

## Reemplazo de información empresarial

Actualiza los placeholders en `src/data/company.js`, `src/data/services.js` y `src/config/contact.js` con la información oficial aprobada. No agregues certificaciones, proveedores, precios ni disponibilidad sin confirmación.

## Despliegue en Netlify

El archivo `netlify.toml` configura el build de Vite, la Netlify Function del formulario y el fallback de React Router:

```toml
[build]
  command = "npm run build"
  publish = "dist"
  functions = "netlify/functions"

[[redirects]]
  from = "/api/leads"
  to = "/.netlify/functions/leads"
  status = 200

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

Conecta el repositorio a Netlify y usa `npm run build` como comando de producción.

### Formulario de cotización (Resend)

El formulario no llama a Resend desde el navegador: lo hace `netlify/functions/leads.mjs`, una función serverless que corre en la misma cuenta de Netlify. La API key nunca se expone al cliente.

Configura las variables de entorno en **Netlify → Site configuration → Environment variables** (no en un archivo):

| Variable | Valor | Notas |
| --- | --- | --- |
| `RESEND_API_KEY` | `re_...` | Se obtiene en resend.com → API Keys. Es la única obligatoria. |
| `LEADS_RECIPIENT` | `mastercodecompany@gmail.com` | Destinatario de las solicitudes. |
| `RESEND_FROM` | `onboarding@resend.dev` | Remitente. Ver nota de abajo. |

Importante sobre el remitente: mientras no verifiques un dominio propio en Resend, el único remitente permitido es `onboarding@resend.dev`, y a su vez Resend solo permite enviar a **el mismo correo con el que creaste la cuenta**. Por eso la cuenta de Resend debe registrarse con `mastercodecompany@gmail.com`. Más adelante, al verificar un dominio (por ejemplo `enermove.co`), cambia `RESEND_FROM` a `Notificaciones <notificaciones@enermove.co>`.

Después de añadir las variables, redeploya el sitio (Netlify no inyecta variables en despliegues ya existentes).

