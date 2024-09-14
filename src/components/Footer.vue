<template>
  <v-footer class="text-center d-flex flex-column">
    <div>
      <v-btn v-for="icon in icons" :key="icon" :icon="icon" density="compact" class="mx-8" variant="text"
        @click="showSnackbar(icon)"></v-btn>
      <v-snackbar v-model="snackbar">
        {{ currentText }}

        <template v-slot:actions>
          <v-btn color="pink" variant="text" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
    <v-divider></v-divider>
  </v-footer>
</template>

<script setup>
import { ref } from 'vue'

const icons = [
  'mdi-phone',
  'mdi-gmail',
  'mdi-linkedin'
]

const links = {
  'mdi-linkedin': 'https://www.linkedin.com/in/maelys-lupin',
}

const snackbar = ref(false)
const currentText = ref('')

const texts = {
  'mdi-phone': '07.60.08.56.76',
  'mdi-gmail': 'maelyslupin6@gmail.com',
  'mdi-linkedin': 'https://www.linkedin.com/in/maelys-lupin'
}

const showSnackbar = (icon) => {
  if (links[icon]) {
    window.location.href = links[icon]
  } else {
    currentText.value = texts[icon]
    snackbar.value = true
  }
}
</script>
