import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

const readBody = async (request) => {
  const chunks = [];
  for await (const chunk of request) chunks.push(chunk);
  return Buffer.concat(chunks).toString('utf8');
};

const leadsApiPlugin = (mode) => ({
  name: 'enermove-leads-api',
  apply: 'serve',
  configureServer(server) {
    Object.assign(process.env, loadEnv(mode, server.config.root, ''));

    server.middlewares.use('/api/leads', async (request, response) => {
      try {
        const { handler } = await server.ssrLoadModule('/netlify/functions/leads.mjs');
        const result = await handler({
          httpMethod: request.method,
          body: request.method === 'POST' ? await readBody(request) : null,
        });

        response.statusCode = result.statusCode;
        Object.entries(result.headers).forEach(([name, value]) => response.setHeader(name, value));
        response.end(result.body);
      } catch (error) {
        server.config.logger.error(`[leads] ${error.stack || error.message}`);
        response.statusCode = 500;
        response.setHeader('Content-Type', 'application/json');
        response.end(JSON.stringify({ ok: false, error: 'Error interno del servidor.' }));
      }
    });
  },
});

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    leadsApiPlugin(mode),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'ENERMOVE',
        short_name: 'ENERMOVE',
        description: 'Soluciones de movilidad eléctrica y energía limpia para hogares y empresas en Colombia.',
        theme_color: '#0C4EA8',
        background_color: '#F8F7F2',
        display: 'standalone',
        orientation: 'portrait-primary',
        scope: '/',
        start_url: '/',
        icons: [
          { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any maskable' },
          { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
        ],
      },
    }),
  ],
  server: {
    port: 5173,
  },
}));
