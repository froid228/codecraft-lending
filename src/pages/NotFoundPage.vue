<template>
  <div>
    <Header />
    <main class="error-page">
      <h1 class="error-code">404</h1>
      <h2>Страница не найдена</h2>
      <p>Кажется, вы заблудились.</p>
      <div style="margin-top: 2rem;">
        <a href="#home" class="pure-button pure-button-primary">На главную</a>
        <a href="#contacts" class="pure-button">Контакты</a>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
</script>

<style scoped>
.error-page {
  text-align: center;
  padding: 4rem 1rem;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.error-code {
  font-size: 6rem;
  font-weight: 700;
  color: #2c5530;
  margin: 0;
}
</style>