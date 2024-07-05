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

    <!-- <div class="pt-0">
      Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut
      risus eget metus luctus accumsan id ultrices nunc.
    </div> -->

    <v-divider></v-divider>

    <!-- <div>
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </div> -->
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
  'mdi-linkedin': 'https://vuetifyjs.com/',
}

const snackbar = ref(false)
const currentText = ref('')

const texts = {
  'mdi-phone': 'This is the phone text',
  'mdi-gmail': 'This is the Gmail text',
  'mdi-linkedin': 'https://vuetifyjs.com/'
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
