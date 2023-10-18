import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'

window.mitt = mitt()

createApp(App).mount('#app')
