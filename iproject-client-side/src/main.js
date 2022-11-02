import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
// import Vue from 'vue'

import App from './App.vue'
import router from './router'
// import VueSocketIO from 'vue-socket.io'
// import socketio from 'socket.io';
 

// import './assets/main.css'


const app = createApp(App)

// app.use(new VueSocketIO({
//     debug: true,
//     connection: 'http://localhost:4000',
// }))

const pinia = createPinia()

pinia.use(({ store }) => {

    store.router = markRaw(router)
})

app.use(pinia)
app.use(router)

app.mount('#app')