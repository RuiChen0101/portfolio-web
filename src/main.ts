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

import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC8oOX6XFFIX4FUeDTSRC_fSEDIIfnx5AU",
    authDomain: "ruichen-porfolio.firebaseapp.com",
    projectId: "ruichen-porfolio",
    storageBucket: "ruichen-porfolio.appspot.com",
    messagingSenderId: "614089686108",
    appId: "1:614089686108:web:3baa2e8693458308f5fa99",
    measurementId: "G-JQB9JW9HM7"
};

initializeApp(firebaseConfig);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(store).use(router).mount('#app');
