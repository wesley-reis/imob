import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2'
import Swal from 'sweetalert2/dist/sweetalert2.js'

import './assets/app.css'
import 'sweetalert2/dist/sweetalert2.min.css'


const Toast = Swal.mixin({
    toast: true,
    position:"top-end",
    timer: 3000,
    timerProgressBar:true,
    showConfirmButton:false
});

window.Toast = Toast;

createApp(App).use(store).use(VueSweetalert2).use(router).mount('#app')
