<script setup>
import { ref, computed } from 'vue'
import { projects } from '../data/portfolio'
import SectionHead from './SectionHead.vue'
const cats = ['Tous', ...new Set(projects.map((p) => p.category))]
const active = ref('Tous'), current = ref(null), dlg = ref(null)
const list = computed(() => projects.filter((p) => active.value === 'Tous' || p.category === active.value))
const show = (p) => { current.value = p; dlg.value.showModal() }
const hasDetails = (p) => !!(p.details || p.tech.length)
</script>
<template>
  <section id="projets"><div class="wrap">
    <SectionHead kicker="Projets" title="Mes réalisations" />
    <div class="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filtrer par catégorie">
      <button v-for="c in cats" :key="c" class="btn !min-h-10 !py-1 text-sm" :class="active === c && 'btn-o'" :aria-pressed="active === c" @click="active = c">{{ c }}</button>
    </div>
    <div class="grid gap-6 md:grid-cols-2">
      <article v-for="p in list" :key="p.id" class="card flex flex-col !p-0 overflow-hidden" :class="p.featured && 'md:col-span-2'">
        <div class="relative grid aspect-video w-full place-items-center overflow-hidden" style="background:linear-gradient(135deg,#101828,#1E293B)">
          <img v-if="p.image" :src="p.image" :alt="`Capture d’écran de ${p.name}`" loading="lazy" class="size-full object-contain" />
          <template v-else><i class="fa-solid text-5xl text-orange/80" :class="p.icon" aria-hidden="true"></i>
            <span class="absolute bottom-2 right-3 font-mono text-[10px] text-slate">Illustration — pas une capture</span></template>
          <span v-if="p.featured" class="absolute left-3 top-3 rounded bg-orange px-2 py-0.5 text-xs font-bold text-white">Projet majeur</span>
        </div>
        <div class="flex flex-1 flex-col p-6">
          <p class="font-mono text-xs text-orange">{{ p.type }}</p>
          <h3 class="mt-1 flex flex-wrap items-center gap-2 text-xl font-bold">{{ p.name }}
            <span v-if="p.status" class="tag !text-orange">{{ p.status }}</span></h3>
          <p class="muted mt-2">{{ p.description }}</p>
          <p v-if="p.role" class="mt-2 text-sm"><strong>Rôle :</strong> {{ p.role }}</p>
          <ul class="mt-3 flex flex-wrap gap-2"><li v-for="t in p.tech" :key="t" class="tag">{{ t }}</li></ul>
          <div class="mt-auto flex flex-wrap gap-2 pt-5">
            <button v-if="hasDetails(p)" class="btn" @click="show(p)">Détails du projet</button>
            <a v-if="p.url" :href="p.url" target="_blank" rel="noopener noreferrer" class="btn btn-o">Voir le projet<i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></a>
            <p v-else class="text-gray-500 text-md">Repos github privé: code source non public pour des raisons de confidentialité professionnelle.</p>
            <a v-if="p.github" :href="p.github" target="_blank" rel="noopener noreferrer" class="btn"><i class="fa-brands fa-github" aria-hidden="true"></i>GitHub</a>
          </div>
        </div>
      </article>
    </div>
    <dialog ref="dlg" aria-labelledby="dlg-title" @click="(e) => e.target === dlg && dlg.close()">
      <template v-if="current">
        <div class="flex items-start justify-between gap-4"><h3 id="dlg-title" class="text-2xl font-bold">{{ current.name }}</h3>
          <button class="btn !px-3" @click="dlg.close()" aria-label="Fermer"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button></div>
        <p class="font-mono text-xs text-orange">{{ current.type }}</p>
        <p class="mt-3">{{ current.description }}</p><p v-if="current.details" class="muted mt-2">{{ current.details }}</p>
        <p v-if="current.role" class="mt-3"><strong>Rôle :</strong> {{ current.role }}</p>
        <ul class="mt-4 flex flex-wrap gap-2"><li v-for="t in current.tech" :key="t" class="tag">{{ t }}</li></ul>
        <div class="mt-5 flex flex-wrap gap-2">
          <a v-if="current.url" :href="current.url" target="_blank" rel="noopener noreferrer" class="btn btn-o">Voir le projet</a>
          <a v-if="current.stores.appstore" :href="current.stores.appstore" target="_blank" rel="noopener noreferrer" class="btn"><i class="fa-brands fa-apple" aria-hidden="true"></i>App Store</a>
          <a v-if="current.stores.playstore" :href="current.stores.playstore" target="_blank" rel="noopener noreferrer" class="btn"><i class="fa-brands fa-google-play" aria-hidden="true"></i>Google Play</a>
        </div>
      </template>
    </dialog>
  </div></section>
</template>
