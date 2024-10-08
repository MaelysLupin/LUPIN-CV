// Plugins
import Components from "unplugin-vue-components/vite";
import Vue from "@vitejs/plugin-vue";
import Vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import ViteFonts from "unplugin-fonts/vite";
import VueRouter from "unplugin-vue-router/vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

// Utilities
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
// const base = process.env.NODE_ENV === "production" ? "/LUPIN-CV/" : "/";
export default defineConfig({
  base: "/LUPIN-CV/",
  plugins: [
    VueRouter(),
    Vue({
      template: { transformAssetUrls },
    }),
    viteStaticCopy({
      targets: [
        {
          src: "locales", // Dossier contenant vos fichiers JSON de localisation
          dest: "", // Destination dans le dossier dist
        },
      ],
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
    Vuetify({
      autoImport: true,
      styles: {
        configFile: "src/styles/settings.scss",
      },
    }),
    Components(),
    ViteFonts({
      google: {
        families: [
          {
            name: "Roboto",
            styles: "wght@100;300;400;500;700;900",
          },
        ],
      },
    }),
  ],
  define: { "process.env": {} },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"],
  },
  server: {
    port: 3000,
  },
});
