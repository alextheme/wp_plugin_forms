import { createApp } from 'vue'
import { plugin, defaultConfig } from '@formkit/vue'
import './style.scss'

import App from './App.vue'

const app = createApp(App)
    .use(plugin, defaultConfig)
    .mount('#shbb_forms_app')
