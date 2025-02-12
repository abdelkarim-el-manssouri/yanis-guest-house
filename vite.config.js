import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import vitePluginRequire from "vite-plugin-require";
// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [react(), vitePluginRequire.default()],
  plugins: [react()],
  build: {
    outDir: "dist",
    dynamicImportVars: true,
    sourcemap: true,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        pure_funcs: ["console.log"],
      },
    },
    rollupOptions: {
      output: {
        sourcemapExcludeSources: true,
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
  server: {
    mimeTypes: {
      "image/jpeg": "image/jpeg",
      "image/png": "image/png",
      "image/jpg": "image/jpg",
      "image/webp": "image/webp",
      // "image/webp": "image/webp",
      "text/javascript": "application/javascript",
    },
  },
});
