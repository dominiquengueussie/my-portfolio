<script setup>
import { profile, nav } from '../data/portfolio'
import { ref, onMounted, onUnmounted } from 'vue'
const top = ref(false), year = new Date().getFullYear()
const on = () => (top.value = window.scrollY > 600)
onMounted(() => window.addEventListener('scroll', on, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', on))
</script>
<template>
  <footer class="border-t py-10" style="border-color:var(--bd)"><div class="wrap grid gap-8 md:grid-cols-3">
    <div><p class="font-mono font-bold">{{ profile.brand }}</p><p class="muted mt-2 text-sm">{{ profile.name }}<br />Développeur Full-Stack · {{ profile.location }}</p>
      <a :href="`mailto:${profile.email}`" class="link mt-2 inline-block text-sm">{{ profile.email }}</a></div>
    <nav aria-label="Navigation secondaire"><ul class="muted grid grid-cols-2 gap-2 text-sm"><li v-for="[l, h] in nav" :key="h"><a :href="h" class="hover:text-blue">{{ l }}</a></li></ul></nav>
    <div><p class="text-sm font-semibold">Technologies principales</p><p class="mt-2 flex flex-wrap gap-2"><span v-for="t in ['Laravel', 'Vue.js', 'Nuxt', 'Docker']" :key="t" class="tag">{{ t }}</span></p></div>
    <p class="muted text-sm md:col-span-3">© {{ year }} {{ profile.name }}. Tous droits réservés. · Designed &amp; Developed by Dominique.</p>
  </div></footer>
  <a v-if="top" href="#accueil" class="btn btn-o fixed bottom-5 right-5 z-40 !px-3 shadow-lg" aria-label="Retour en haut"><i class="fa-solid fa-arrow-up" aria-hidden="true"></i></a>
</template>
