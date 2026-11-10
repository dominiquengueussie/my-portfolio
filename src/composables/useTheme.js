import { ref } from 'vue'
const dark = ref(document.documentElement.classList.contains('dark'))
export function useTheme() {
  const toggle = () => {
    dark.value = !dark.value
    document.documentElement.classList.toggle('dark', dark.value)
    try { localStorage.setItem('theme', dark.value ? 'dark' : 'light') } catch { /* stockage indisponible */ }
  }
  return { dark, toggle }
}
