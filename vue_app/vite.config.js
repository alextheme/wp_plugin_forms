import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // this is always the same provided that the
  // wp-content directory is accessible by the webserver
  base: "/wp-content/plugins/shppb_forms_insurance/vue_app/dist/",
  plugins: [vue()],
  build: {
    // watch for changes:
    // https://vitejs.dev/config/build-options.html#build-watch
    watch: {},
    rollupOptions: {
      // no hash in filenames, so it's always the same name
      output: {
        entryFileNames: 'assets/js/[name].js',
        chunkFileNames: 'assets/js/[name].js',
        assetFileNames: 'assets/css/[name].[ext]'
      }
    }
  }
});
