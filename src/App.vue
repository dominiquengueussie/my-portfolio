<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterBar from './components/FooterBar.vue'
</script>
<template>
  <NavBar />
  <main><HeroSection /><AboutSection /><SkillsSection /><ExperienceSection /><ProjectsSection /><ServicesSection /><ContactSection /></main>
  <FooterBar />
</template>
