<template>
  <div>
    <Header />
    
    <main>
      <section class="hero-section">
        <div class="container">
          <h1>Разработка, от которой растёт ваш бизнес</h1>
          <p>Full-stack команда для стартапов и scale-up'ов. От MVP до production — за 4 недели.</p>
          <a href="#contacts" class="pure-button pure-button-primary">
            Обсудить проект
          </a>
        </div>
      </section>
    </main>
    
    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
</script>

<style scoped>
.hero-section {
  padding: 4rem 0;
  text-align: center;
  min-height: 65vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1.5rem;
}
h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
p {
  font-size: 1.125rem;
  color: #555;
  margin-bottom: 2rem;
}
</style>