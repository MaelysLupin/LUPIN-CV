// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Style
import './styles/styles.css';

//i18n
import {i18n} from "./plugins/i18n"

const app = createApp(App)
app.use(i18n)

registerPlugins(app)

app.mount('#app')
