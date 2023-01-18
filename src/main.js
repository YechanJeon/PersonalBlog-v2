import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import 'highlight.js/styles/agate.css'
// import cookies from 'vue-cookies'
import VueCookies from 'vue3-cookies'

// library.add(faCode , faImage , faCaretDown)
library.add(fas)


createApp(App).use(store).use(router).use(VueCookies).component("font-awesome-icon", FontAwesomeIcon).mount('#app')//