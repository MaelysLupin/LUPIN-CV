<template>
  <v-app class="full-app">
    <NavBar class="navbar" />
    <div class="app">
      <RouterView class="content" />
    </div>
    <Footer class="footer footer-fixed-bottom bg-footer" />
  </v-app>
</template>

<script lang="ts" setup>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
</script>
