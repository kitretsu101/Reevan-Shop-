// dev.mjs — programmatic Vite dev server (bypasses config file bundling)
// Uses createRequire to force CJS resolution, avoiding ESM path-with-spaces issue on Windows.
import { createRequire } from 'module';
import path from 'path';
import { fileURLToPath } from 'url';

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const { createServer } = require('vite');

// Dynamically import the ESM-only react plugin
const reactPlugin = await import('@vitejs/plugin-react-swc').then(m => m.default);

const server = await createServer({
  root: __dirname,
  configFile: false,
  plugins: [reactPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    open: true,
  },
});

await server.listen();
server.printUrls();
