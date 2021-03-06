import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import  Notifications from '@kyvg/vue3-notification'

const app = createApp(App)
app.use(Notifications)
app.mount('#app')
