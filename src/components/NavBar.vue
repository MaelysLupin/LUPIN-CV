<template>
  <v-card color="basil">
    <v-card-title class="d-flex align-center justify-center py-6 bg-basil position-relative">
      <h1 class="font-weight-bold text-h2 text-basil m-0">
        {{ $t('nom') }}
      </h1>
      <ChangeLg class="change-lg" />
    </v-card-title>
  </v-card>
</template>

<script setup lang="ts">
import ChangeLg from "./ChangeLg.vue"
</script>
