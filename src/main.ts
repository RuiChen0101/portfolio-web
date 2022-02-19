import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
    faEnvelope,
} from '@fortawesome/free-regular-svg-icons'

import {
    faPhone
} from '@fortawesome/free-solid-svg-icons'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

library.add(faEnvelope, faPhone);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(store).use(router).mount('#app');
