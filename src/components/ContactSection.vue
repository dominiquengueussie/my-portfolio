<script setup>
import { reactive, ref } from 'vue'
import { profile } from '../data/portfolio'
import SectionHead from './SectionHead.vue'
const fid = import.meta.env.VITE_FORMSPREE_ID
const f = reactive({ name: '', email: '', subject: '', message: '', website: '' })
const err = reactive({}), state = ref('idle'), copied = ref(false)
const social = [['github', 'fa-github', ''], ['linkedin', 'fa-linkedin', ''], ['facebook', 'fa-facebook', ''], ['whatsapp', 'fa-whatsapp', 'https://wa.me/']]
  .filter(([k]) => profile.social[k]).map(([k, i, pre]) => ({ k, i, href: pre + profile.social[k] }))
const validate = () => {
  Object.keys(err).forEach((k) => delete err[k])
  if (f.name.trim().length < 2) err.name = 'Veuillez saisir votre nom.'
  if (!/^\S+@\S+\.\S+$/.test(f.email)) err.email = 'Adresse e-mail invalide.'
  if (f.subject.trim().length < 3) err.subject = 'Veuillez saisir un sujet.'
  if (f.message.trim().length < 10) err.message = 'Le message doit contenir au moins 10 caractères.'
  return !Object.keys(err).length
}
const submit = async () => {
  if (f.website || !validate()) return // champ piège anti-spam
  if (!fid) { // repli sans service configuré
    location.href = `mailto:${profile.email}?subject=${encodeURIComponent(f.subject)}&body=${encodeURIComponent(`${f.message}\n\n— ${f.name} (${f.email})`)}`
    return
  }
  state.value = 'loading'
  try {
    const r = await fetch(`https://formspree.io/f/${fid}`, { method: 'POST', headers: { Accept: 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify({ name: f.name, email: f.email, subject: f.subject, message: f.message }) })
    if (!r.ok) throw new Error()
    state.value = 'ok'; Object.assign(f, { name: '', email: '', subject: '', message: '' })
  } catch { state.value = 'error' }
}
const copy = async () => {
  try { await navigator.clipboard.writeText(profile.email); copied.value = true; setTimeout(() => (copied.value = false), 2000) } catch { location.href = `mailto:${profile.email}` }
}
</script>
<template>
  <section id="contact" class="alt"><div class="wrap">
    <SectionHead kicker="Contact" title="Vous avez un projet en tête ? Construisons-le ensemble." />
    <div class="grid gap-10 lg:grid-cols-2">
      <div v-reveal>
        <p class="muted text-lg">Vous recherchez un développeur Full-Stack pour développer une application web, concevoir une API ou donner vie à votre projet SaaS ? Échangeons sur vos besoins.</p>
        <ul class="mt-6 space-y-3">
          <li><a :href="`tel:${profile.phone.replaceAll(' ', '')}`" class="flex items-center gap-3 hover:text-blue"><i class="fa-solid fa-phone w-5 text-orange" aria-hidden="true"></i>{{ profile.phone }}</a></li>
          <li class="flex flex-wrap items-center gap-3"><i class="fa-solid fa-envelope w-5 text-orange" aria-hidden="true"></i><a :href="`mailto:${profile.email}`" class="hover:text-blue">{{ profile.email }}</a>
            <button class="btn !min-h-9 !py-0 text-sm" @click="copy"><i class="fa-solid" :class="copied ? 'fa-check' : 'fa-copy'" aria-hidden="true"></i>{{ copied ? 'Copié !' : 'Copier' }}</button></li>
          <li class="flex items-center gap-3"><i class="fa-solid fa-location-dot w-5 text-orange" aria-hidden="true"></i>{{ profile.location }}</li>
        </ul>
        <ul v-if="social.length" class="mt-6 flex gap-3"><li v-for="s in social" :key="s.k"><a :href="s.href" target="_blank" rel="noopener noreferrer" class="btn !px-3" :aria-label="s.k"><i class="fa-brands" :class="s.i" aria-hidden="true"></i></a></li></ul>
      </div>
      <form class="card space-y-4" novalidate @submit.prevent="submit" v-reveal>
        <div v-for="[k, l, t] in [['name', 'Nom', 'text'], ['email', 'Adresse e-mail', 'email'], ['subject', 'Sujet', 'text']]" :key="k">
          <label :for="k" class="mb-1 block text-sm font-semibold">{{ l }}</label>
          <input :id="k" v-model="f[k]" :type="t" class="input" :aria-invalid="!!err[k]" :aria-describedby="err[k] ? k + '-e' : null" />
          <p v-if="err[k]" :id="k + '-e'" class="mt-1 text-sm text-red-500">{{ err[k] }}</p>
        </div>
        <div><label for="message" class="mb-1 block text-sm font-semibold">Message</label>
          <textarea id="message" v-model="f.message" rows="5" class="input" :aria-invalid="!!err.message" :aria-describedby="err.message ? 'message-e' : null"></textarea>
          <p v-if="err.message" id="message-e" class="mt-1 text-sm text-red-500">{{ err.message }}</p></div>
        <input v-model="f.website" type="text" name="website" tabindex="-1" autocomplete="off" aria-hidden="true" class="absolute -left-[9999px]" />
        <button class="btn btn-o w-full" :disabled="state === 'loading'"><i class="fa-solid" :class="state === 'loading' ? 'fa-spinner fa-spin' : 'fa-paper-plane'" aria-hidden="true"></i>{{ state === 'loading' ? 'Envoi…' : 'Envoyer le message' }}</button>
        <p v-if="state === 'ok'" role="status" class="text-green-500">Merci ! Votre message a bien été envoyé.</p>
        <p v-if="state === 'error'" role="alert" class="text-red-500">L’envoi a échoué. Réessayez ou écrivez-moi à {{ profile.email }}.</p>
      </form>
    </div>
  </div></section>
</template>
