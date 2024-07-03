/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme:
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark",
    themes: {
      light: {
        colors: {
          green: "#356859",
          bg: "#FFFBE6",
        },
      },
      dark: {
        colors: {
          green: "#356859",
          bg: "#FFFBE6",
        },
      },
    },
  },
});
