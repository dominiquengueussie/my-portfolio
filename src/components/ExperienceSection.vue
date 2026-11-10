<script setup>
import { experiences, education } from '../data/portfolio'
import SectionHead from './SectionHead.vue'
</script>
<template>
  <section id="experiences" class="alt"><div class="wrap">
    <SectionHead kicker="Expériences" title="Mon parcours professionnel" />
    <ol class="relative ml-3 border-l-2 pl-8" style="border-color:var(--bd)">
      <li v-for="e in experiences" :key="e.role" class="relative pb-10 last:pb-0" v-reveal>
        <span class="absolute -left-[2.6rem] top-1.5 size-4 rounded-full border-4 bg-orange" style="border-color:var(--alt)"></span>
        <p class="font-mono text-sm text-orange">{{ e.period }}</p>
        <h3 class="mt-1 text-xl font-bold">{{ e.role }}</h3>
        <p class="muted font-medium">{{ e.org }}</p>
        <ul class="muted mt-3 list-disc space-y-1 pl-5"><li v-for="p in e.points" :key="p">{{ p }}</li></ul>
      </li>
    </ol>
    <h3 class="mt-16 mb-6 text-2xl font-bold" v-reveal>Formation</h3>
    <div class="grid gap-5 md:grid-cols-2">
      <article v-for="f in education" :key="f.title" class="card" v-reveal>
        <i class="fa-solid fa-graduation-cap text-orange" aria-hidden="true"></i>
        <h4 class="mt-2 font-bold">{{ f.title }}</h4><p class="muted">{{ f.school }} · {{ f.period }}</p>
      </article>
    </div>
  </div></section>
</template>
