import { createApp } from 'vue'
import App from './App.vue'

/* MODULES */
import router from './router'
import axios from 'axios'
import VueSplide from '@splidejs/vue-splide'

/* FONTAWESOME */
// Core
import { library } from '@fortawesome/fontawesome-svg-core'
// icon Component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import Icons
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons'
import { faStarHalfStroke } from '@fortawesome/free-regular-svg-icons'

// Add Icons to Library
library.add(farStar, fasStar, faStarHalfStroke)

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
});

/* Import Style */
import './assets/styles/style.scss'

/* APP */
const app = createApp(App)

app.config.unwrapInjectedRef = true

app.use(router, axios, VueSplide)
app.use(vuetify)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
