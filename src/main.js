import { createApp } from 'vue'
import App from './App.vue'

/* MODULES */
import router from './router'
import axios from 'axios'

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



/* Import Style */
import './assets/styles/style.scss'

const app = createApp(App)
app.config.unwrapInjectedRef = true

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router, axios)

app.mount('#app')
