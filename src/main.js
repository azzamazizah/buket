import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './views/Home.vue'
import Products from './views/Products.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/products', component: Products },
    { path: '/about', component: About },
    { path: '/contact', component: Contact }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')