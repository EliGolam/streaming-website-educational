import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

/* Import Style */
import './assets/styles/style.scss'

const app = createApp(App)
app.config.unwrapInjectedRef = true
app.use(router, axios)

app.mount('#app')
