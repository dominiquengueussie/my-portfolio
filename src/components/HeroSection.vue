<script setup>
import { profile } from '../data/portfolio'
const stack = ['Laravel', 'Django', 'Vue.js', 'Nuxt', 'Docker', 'API REST']
</script>
<template>
  <section id="accueil" class="!pt-32">
    <div class="wrap grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
      <div>
        <p v-if="profile.availability.show" class="tag mb-5 !text-xs"><span class="mr-2 inline-block size-2 rounded-full bg-green-500"></span>{{ profile.availability.text }}</p>
        <p class="kicker">Bonjour, je suis Dominique Ngueussie.</p>
        <h1 class="mt-3 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Je conçois des <span class="text-orange">applications web performantes</span> et des <span class="text-orange">solutions digitales évolutives</span>.</h1>
        <p class="muted mt-5 max-w-xl text-lg">Développeur Full-Stack spécialisé en Laravel, Django, Vue.js et Nuxt. J’accompagne les entreprises dans la conception, le développement et le déploiement de leurs applications web et plateformes SaaS.</p>
        <div class="mt-8 flex flex-wrap gap-3">
          <a href="#projets" class="btn btn-o">Découvrir mes projets<i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
          <a href="#contact" class="btn">Me contacter</a>
          <a :href="profile.cv" download class="btn"><i class="fa-solid fa-download" aria-hidden="true"></i>Télécharger mon CV</a>
        </div>
        <ul class="mt-8 flex flex-wrap gap-2"><li v-for="s in stack" :key="s" class="tag">{{ s }}</li></ul>
      </div>
      <div class="relative mx-auto w-full max-w-sm">
        <div class="absolute -inset-3 rounded-3xl bg-gradient-to-br from-orange/30 to-blue/30 blur-2xl" aria-hidden="true"></div>
        <img :src="profile.photo" :alt="`Portrait professionnel de ${profile.short}`" width="512" height="512" fetchpriority="high"
          class="relative aspect-square w-full rounded-3xl border object-cover" style="border-color:var(--bd)" />
        <div class="card absolute -bottom-4 -left-3 !p-3 font-mono text-xs" aria-hidden="true"><i class="fa-solid fa-code mr-2 text-orange"></i>Front · Back · DevOps</div>
      </div>
    </div>
  </section>
</template>
