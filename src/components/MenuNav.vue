<template>
  <v-card color="basil">
    <v-tabs v-model="tab" bg-color="transparent" color="basil" grow>
      <v-tab v-for="item in localizedItems" :key="item.key" :value="item.key">
        <span :class="{ 'text-no-select': tab !== item.key }">{{ item.label }}</span>
      </v-tab>
    </v-tabs>

    <v-tabs-window v-model="tab">
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
