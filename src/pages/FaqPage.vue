<template>
  <div>
    <Header />
    
    <main class="main">
      <section class="section">
        <div class="container">
          <h1 class="page-title">Часто задаваемые вопросы</h1>
          
          <div class="faq-wrapper">
            <div class="faq-item">
              <details>
                <summary>Как начать работу с вами?</summary>
                <p>Напишите нам на hello@codecraft.dev или заполните форму на странице «Контакты». Мы ответим в течение 2 часов и обсудим ваш проект.</p>
              </details>
            </div>

            <div class="faq-item">
              <details>
                <summary>Сколько стоит разработка MVP?</summary>
                <p>Стоимость типового MVP для стартапа начинается от 300 000 ₽ и зависит от сложности функционала. Срок разработки — от 4 недель.</p>
              </details>
            </div>

            <div class="faq-item">
              <details>
                <summary>Есть ли у вас NDA?</summary>
                <p>Да, мы подписываем NDA (соглашение о неразглашении) до начала работы над проектом. Конфиденциальность ваших идей — наш приоритет.</p>
              </details>
            </div>

            <div class="faq-item">
              <details>
                <summary>Работаете ли вы с физическими лицами?</summary>
                <p>Да, мы работаем как с юридическими лицами (ООО, ИП), так и с физическими лицами. Возможна оплата по договору или счёту.</p>
              </details>
            </div>

            <div class="faq-item">
              <details>
                <summary>Как происходит оплата?</summary>
                <p>Оплата поэтапная: 50% аванс перед началом работы, 50% по завершении проекта. Также возможна рассрочка до 3 месяцев.</p>
              </details>
            </div>

            <div class="faq-item">
              <details>
                <summary>Предоставляете ли вы гарантию?</summary>
                <p>Да, мы предоставляем гарантию на всю разработанную функциональность сроком на 3 месяца после сдачи проекта.</p>
              </details>
            </div>
          </div>

          <div class="cta-block">
            <p>Не нашли ответ на свой вопрос?</p>
            <a href="#contacts" class="pure-button pure-button-primary">
              Связаться с нами
            </a>
          </div>
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
.section {
  padding: 4rem 0;
  min-height: 70vh;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.page-title {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
}

.faq-wrapper {
  margin-bottom: 3rem;
}

.faq-item {
  margin-bottom: 1rem;
}

.faq-item details {
  background: white;
  border: 1px solid #e0e5eb;
  border-radius: 8px;
  padding: 1.25rem;
  transition: all 0.3s ease;
}

.faq-item details:hover {
  border-color: #2c5530;
  box-shadow: 0 2px 8px rgba(44, 85, 48, 0.1);
}

.faq-item summary {
  font-weight: 600;
  cursor: pointer;
  list-style: none;
  padding-right: 2rem;
  position: relative;
  color: #2c5530;
  font-size: 1.1rem;
}

.faq-item summary::-webkit-details-marker {
  display: none;
}

.faq-item summary::after {
  content: '+';
  position: absolute;
  right: 0;
  top: 0;
  font-size: 1.5rem;
  color: #2c5530;
  transition: transform 0.3s ease;
}

.faq-item details[open] summary::after {
  content: '−';
}

.faq-item details p {
  margin-top: 1rem;
  margin-bottom: 0;
  line-height: 1.6;
  color: #555;
}

.cta-block {
  text-align: center;
  padding: 2rem;
  background: #f9fbfc;
  border-radius: 12px;
}

.cta-block p {
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
  color: #555;
}

/* Адаптация */
@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .faq-item summary {
    font-size: 1rem;
  }
}
</style>