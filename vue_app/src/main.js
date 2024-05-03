import { createApp } from 'vue'
import { plugin, defaultConfig } from '@formkit/vue'
import VueSplide from '@splidejs/vue-splide';
import './style.scss'

import App from './App.vue'

const app = createApp(App)
    .use(plugin, defaultConfig)
    .use(VueSplide)
    .mount('#shbb_forms_app')
