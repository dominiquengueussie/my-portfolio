<script setup>
import { skills } from '../data/portfolio'
import SectionHead from './SectionHead.vue'
</script>
<template>
  <section id="competences"><div class="wrap">
    <SectionHead kicker="Compétences" title="Technologies que j’utilise" />
    <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      <article v-for="g in skills" :key="g.name" class="card" v-reveal>
        <h3 class="mb-4 flex items-center gap-3 font-bold"><span class="grid size-10 place-items-center rounded-lg bg-blue/15 text-blue"><i class="fa-solid" :class="g.icon" aria-hidden="true"></i></span>{{ g.name }}</h3>
        <ul class="flex flex-wrap gap-2"><li v-for="i in g.items" :key="i" class="tag">{{ i }}</li></ul>
      </article>
    </div>
  </div></section>
</template>
