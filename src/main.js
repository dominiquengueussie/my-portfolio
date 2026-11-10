import { createApp } from 'vue'
import '@fortawesome/fontawesome-free/css/fontawesome.css'
import '@fortawesome/fontawesome-free/css/solid.css'
import '@fortawesome/fontawesome-free/css/brands.css'
import './style.css'
import App from './App.vue'

// Animation d'apparition au scroll (IntersectionObserver)
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } })
}, { threshold: 0.12 })

createApp(App)
  .directive('reveal', { mounted(el) { el.classList.add('rv'); io.observe(el) } })
  .mount('#app')
