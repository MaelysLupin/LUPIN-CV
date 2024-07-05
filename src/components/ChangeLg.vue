<template>
  <v-btn class="lang" @click="toggleLocale">
    {{ currentLocale }}
  </v-btn>
</template>

<script lang="ts">
import { globalLocale } from "../plugins/i18n";

export default {
  data() {
    return {
      localeIndex: 0,
      locales: ["FR", "EN"],
    };
  },
  computed: {
    currentLocale() {
      return this.locales[this.localeIndex];
    },
  },
  methods: {
    toggleLocale() {
      // Change the locale
      this.localeIndex = (this.localeIndex + 1) % this.locales.length;

      // Update the global locale
      globalLocale.currentLocale = this.currentLocale.toLowerCase();
      // console.log('Current Locale Updated:', globalLocale.currentLocale);

      // Update the i18n instance locale
      this.$i18n.locale = globalLocale.currentLocale;
    },
  },
};
</script>