<template>
  <header class="header">
    <div class="container header-inner">
      <a href="#home" class="logo">CodeCraft</a>
      <nav class="nav">
        <ul class="pure-menu-list" style="display: flex; gap: 1.5rem; list-style: none; margin: 0; padding: 0;">
          <li><a href="#home">Главная</a></li>
          <li><a href="#contacts">Контакты</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  background: white;
  box-shadow: 0 1px 10px rgba(0,0,0,0.05);
  position: sticky;
  top: 0;
  z-index: 100;
}
.header-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  max-width: 1200px;
  margin: 0 auto;
}
.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c5530;
}
</style>