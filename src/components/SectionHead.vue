<script setup>defineProps({ kicker: String, title: String })</script>
<template><div class="mb-12" v-reveal><p class="kicker">{{ kicker }}</p><h2 class="h2 mt-2">{{ title }}</h2></div></template>
