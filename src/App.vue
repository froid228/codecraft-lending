<template>
  <div class="app-wrapper">
    <component :is="currentPage" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import HomePage from './pages/HomePage.vue'
import ContactsPage from './pages/ContactsPage.vue'
import FaqPage from './pages/FaqPage.vue'
import NotFoundPage from './pages/NotFoundPage.vue'

const currentPage = ref(HomePage)

onMounted(() => {
  const path = window.location.hash.slice(1) || 'home'
  const routes = {
    home: HomePage,
    contacts: ContactsPage,
    faq: FaqPage
  }
  currentPage.value = routes[path] || NotFoundPage

  window.addEventListener('hashchange', () => {
    const newPath = window.location.hash.slice(1) || 'home'
    currentPage.value = routes[newPath] || NotFoundPage
  })
})
</script>

<style>
/* ===== STICKY FOOTER - 100% РАБОТАЕТ ===== */
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Всё содержимое кроме футера */
.app-wrapper > *:not(footer) {
  flex: 1 0 auto;
}

/* Футер всегда внизу */
.app-wrapper footer {
  margin-top: auto;
  flex-shrink: 0;
  background: #111 !important;
  color: white !important;
}
</style>