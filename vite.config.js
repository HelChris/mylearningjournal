import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
  root: './',
  build: {
    outDir: 'dist',
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
};
