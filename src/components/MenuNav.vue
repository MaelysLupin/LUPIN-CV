<template>
  <v-card class="card-container" color="basil">
    <div class="tabs-container">
      <v-tabs v-model="tab" bg-color="transparent" color="basil" grow>
        <v-tab v-for="item in localizedItems" :key="item.key" :value="item.key">
          <span :class="{ 'text-no-select': tab !== item.key }">{{ item.label }}</span>
        </v-tab>
      </v-tabs>
    </div>

    <v-tabs-window v-model="tab" class="scrollable-content">
      <v-tabs-window-item v-for="item in localizedItems" :key="item.key" :value="item.key">
        <v-card color="basil" flat>
          <v-card-text class="text-basil">
            <component :is="components[item.key]"></component>
          </v-card-text>
        </v-card>
      </v-tabs-window-item>
    </v-tabs-window>
  </v-card>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { defineAsyncComponent } from 'vue'

const { t, locale } = useI18n()

const tab = ref('tabOne')

const items = [
  { key: 'tabOne', labelKey: 'tabOne' },
  { key: 'tabTwo', labelKey: 'tabTwo' },
  { key: 'tabThree', labelKey: 'tabThree' },
  { key: 'tabFour', labelKey: 'tabFour' },
]

const localizedItems = computed(() =>
  items.map(item => ({
    key: item.key,
    label: t(item.labelKey)
  }))
)

const TabOne = defineAsyncComponent(() => import('./TabOne.vue'))
const TabTwo = defineAsyncComponent(() => import('./TabTwo.vue'))
const TabThree = defineAsyncComponent(() => import('./TabThree.vue'))
const TabFour = defineAsyncComponent(() => import('./TabFour.vue'))

const components = {
  'tabOne': TabOne,
  'tabTwo': TabTwo,
  'tabThree': TabThree,
  'tabFour': TabFour,
}
</script>

<style>
.card-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  /* Ajuste la hauteur totale à la hauteur de la fenêtre */
}

.tabs-container {
  position: sticky;
  top: 0;
  z-index: 1;
  /* Assure que les onglets sont au-dessus du contenu défilant */
  background-color: inherit;
  /* Garde le fond transparent ou défini une couleur si nécessaire */
}

.scrollable-content {
  flex: 1;
  /* Permet au contenu de prendre l'espace restant */
  overflow-y: auto;
  /* Ajoute un défilement vertical si nécessaire */
  padding: 1rem;
  /* Ajoute un peu de padding pour l'espacement interne */
}
</style>
