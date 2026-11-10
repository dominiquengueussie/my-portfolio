<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { profile, nav } from '../data/portfolio'
import { useTheme } from '../composables/useTheme'
const { dark, toggle } = useTheme()
const open = ref(false), scrolled = ref(false)
const onScroll = () => (scrolled.value = window.scrollY > 10)
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
<template>
  <header class="fixed inset-x-0 top-0 z-40 transition-all" :class="scrolled || open ? 'backdrop-blur border-b shadow-lg' : ''"
    :style="scrolled || open ? 'background:color-mix(in srgb,var(--bg) 88%,transparent);border-color:var(--bd)' : ''">
    <nav class="wrap flex h-16 items-center justify-between gap-3" aria-label="Navigation principale">
      <a href="#accueil" class="font-mono text-base font-bold tracking-tight">{{ profile.brand.split('.')[0] }}<span class="text-orange">.DEV</span></a>
      <ul class="hidden items-center gap-6 text-sm font-medium lg:flex">
        <li v-for="[l, h] in nav" :key="h"><a :href="h" class="muted transition hover:text-blue">{{ l }}</a></li>
      </ul>
      <div class="flex items-center gap-2">
        <button class="btn !px-3" @click="toggle" :aria-label="dark ? 'Activer le mode clair' : 'Activer le mode sombre'">
          <i class="fa-solid" :class="dark ? 'fa-sun' : 'fa-moon'" aria-hidden="true"></i></button>
        <a :href="profile.cv" download class="btn btn-o hidden sm:inline-flex"><i class="fa-solid fa-download" aria-hidden="true"></i>Mon CV</a>
        <button class="btn !px-3 lg:hidden" @click="open = !open" :aria-expanded="open" aria-controls="mobile-menu" aria-label="Menu">
          <i class="fa-solid" :class="open ? 'fa-xmark' : 'fa-bars'" aria-hidden="true"></i></button>
      </div>
    </nav>
    <div id="mobile-menu" class="grid transition-all duration-300 lg:hidden" :style="{ gridTemplateRows: open ? '1fr' : '0fr' }">
      <ul class="overflow-hidden">
        <li v-for="[l, h] in nav" :key="h"><a :href="h" @click="open = false" class="wrap flex min-h-12 items-center text-base font-medium" :tabindex="open ? 0 : -1">{{ l }}</a></li>
        <li class="wrap py-3"><a :href="profile.cv" download class="btn btn-o w-full" :tabindex="open ? 0 : -1"><i class="fa-solid fa-download" aria-hidden="true"></i>Télécharger mon CV</a></li>
      </ul>
    </div>
  </header>
</template>
