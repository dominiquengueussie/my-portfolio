<script setup>
import { about, facts } from '../data/portfolio'
import SectionHead from './SectionHead.vue'
</script>
<template>
  <section id="a-propos" class="alt"><div class="wrap">
    <SectionHead kicker="À propos" title="Développeur, bâtisseur de produits web" />
    <div class="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
      <div class="muted space-y-4 text-lg" v-reveal><p v-for="p in about" :key="p">{{ p }}</p></div>
      <dl class="card space-y-4" v-reveal>
        <div v-for="[k, v] in facts" :key="k"><dt class="font-mono text-xs uppercase text-orange">{{ k }}</dt><dd class="font-semibold">{{ v }}</dd></div>
      </dl>
    </div>
  </div></section>
</template>
