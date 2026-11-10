<script setup>
import { process, services } from '../data/portfolio'
import SectionHead from './SectionHead.vue'
</script>
<template>
  <section id="processus" class="alt"><div class="wrap">
    <SectionHead kicker="Méthode" title="Mon processus de travail" />
    <ol class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      <li v-for="(s, i) in process" :key="s[1]" class="card" v-reveal>
        <span class="font-mono text-3xl font-bold text-orange/70">0{{ i + 1 }}</span>
        <h3 class="mt-2 flex items-center gap-2 font-bold"><i class="fa-solid text-blue" :class="s[0]" aria-hidden="true"></i>{{ s[1] }}</h3>
        <p class="muted mt-1 text-sm">{{ s[2] }}</p>
      </li>
    </ol>
  </div></section>
  <section id="services"><div class="wrap">
    <SectionHead kicker="Services" title="Ce que je peux faire pour vous" />
    <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      <article v-for="s in services" :key="s[1]" class="card" v-reveal>
        <span class="grid size-11 place-items-center rounded-lg bg-orange/15 text-orange"><i class="fa-solid" :class="s[0]" aria-hidden="true"></i></span>
        <h3 class="mt-3 font-bold">{{ s[1] }}</h3><p class="muted mt-1 text-sm">{{ s[2] }}</p>
      </article>
    </div>
  </div></section>
</template>
