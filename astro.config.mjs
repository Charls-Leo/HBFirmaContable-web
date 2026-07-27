import { defineConfig } from 'astro/config';

export default defineConfig({
  // Despliegue temporal de pruebas en GitHub Pages.
  // Al migrar a dominio/hosting definitivo, actualizar `site` y eliminar `base`.
  site: 'https://charls-leo.github.io',
  base: '/HBFirmaContable-web',
});
