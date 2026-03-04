<template>
  <div>
    <Header />
    
    <main class="main">
      <section class="section">
        <div class="container">
          <h1 class="page-title">Свяжитесь с нами</h1>
          
          <div class="content-wrapper">
            <!-- Форма -->
            <div class="form-block">
              <form @submit.prevent="handleSubmit" class="pure-form pure-form-stacked">
                <fieldset>
                  <label for="fullname">Имя *</label>
                  <input
                    id="fullname"
                    v-model="formData.fullname"
                    @input="clearError('fullname')"
                    type="text"
                    placeholder="Ваше имя"
                    :class="{ 'input-error': errors.fullname }"
                    required
                  />
                  <span v-if="errors.fullname" class="error-message">
                    {{ errors.fullname }}
                  </span>

                  <label for="email">Email *</label>
                  <input
                    id="email"
                    v-model="formData.email"
                    @input="clearError('email')"
                    type="email"
                    placeholder="your@email.com"
                    :class="{ 'input-error': errors.email }"
                    required
                  />
                  <span v-if="errors.email" class="error-message">
                    {{ errors.email }}
                  </span>

                  <label for="phone">Телефон *</label>
                  <input
                    id="phone"
                    v-model="formData.phone"
                    @input="clearError('phone')"
                    type="tel"
                    placeholder="+7(___)___-__-__"
                    :class="{ 'input-error': errors.phone }"
                    required
                  />
                  <span v-if="errors.phone" class="error-message">
                    {{ errors.phone }}
                  </span>

                  <label for="message">Сообщение</label>
                  <textarea
                    id="message"
                    v-model="formData.message"
                    rows="4"
                    placeholder="Опишите вашу задачу"
                  ></textarea>

                  <!-- Чекбокс на одной строке с текстом -->
                  <div class="checkbox-wrapper">
                    <label class="checkbox-label">
                      <input
                        v-model="formData.agreement"
                        @change="clearError('agreement')"
                        type="checkbox"
                        :class="{ 'input-error': errors.agreement }"
                        required
                      />
                      <span>Соглашаюсь на обработку персональных данных</span>
                    </label>
                    <span v-if="errors.agreement" class="error-message checkbox-error">
                      {{ errors.agreement }}
                    </span>
                  </div>

                  <button type="submit" class="pure-button pure-button-primary">
                    Отправить
                  </button>
                </fieldset>
              </form>
            </div>

            <!-- Контакты -->
            <div class="contact-info">
              <h2>Контакты</h2>
              <p>📧 <a href="mailto:hello@codecraft.dev">hello@codecraft.dev</a></p>
              <p>📍 Москва, Россия</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    
    <Footer />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

const formData = reactive({
  fullname: '',
  email: '',
  phone: '',
  message: '',
  agreement: false
})

const errors = reactive({
  fullname: '',
  email: '',
  phone: '',
  agreement: ''
})

const clearError = (field) => {
  errors[field] = ''
}

const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

const handleSubmit = () => {
  errors.fullname = ''
  errors.email = ''
  errors.phone = ''
  errors.agreement = ''

  let isValid = true

  const words = formData.fullname.trim().split(/\s+/).filter(w => w.length > 0)
  if (words.length < 2) {
    errors.fullname = 'Введите минимум два слова'
    isValid = false
  }

  if (!formData.email.trim()) {
    errors.email = 'Email обязателен'
    isValid = false
  } else if (!isValidEmail(formData.email)) {
    errors.email = 'Введите корректный email'
    isValid = false
  }

  const phoneDigits = formData.phone.replace(/\D/g, '')
  if (!formData.phone.trim()) {
    errors.phone = 'Телефон обязателен'
    isValid = false
  } else if (phoneDigits.length < 10) {
    errors.phone = 'Введите минимум 10 цифр'
    isValid = false
  }

  if (!formData.agreement) {
    errors.agreement = 'Необходимо согласие'
    isValid = false
  }

  if (isValid) {
    console.clear()
    console.log('✅ Форма отправлена!')
    console.log('Имя:', formData.fullname)
    console.log('Email:', formData.email)
    console.log('Телефон:', formData.phone)
    console.log('Сообщение:', formData.message || '(не заполнено)')
    console.log('Время:', new Date().toLocaleString())

    alert('Форма отправлена! Данные в консоли.')
    
    formData.fullname = ''
    formData.email = ''
    formData.phone = ''
    formData.message = ''
    formData.agreement = false
  }
}
</script>

<style scoped>
.section {
  padding: 4rem 0;
  min-height: 70vh;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.page-title {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
}

.content-wrapper {
  display: flex;
  gap: 3rem;
  justify-content: center;
  align-items: flex-start;
}

.form-block {
  flex: 1;
  max-width: 600px;
}

.contact-info {
  background: #f9fbfc;
  border-radius: 16px;
  padding: 2rem;
  border-left: 4px solid #2c5530;
  min-width: 300px;
}

.contact-info h2 {
  margin-top: 0;
  color: #2c5530;
}

.contact-info a {
  color: #2c5530;
  text-decoration: none;
}

.contact-info a:hover {
  text-decoration: underline;
}

/* Чекбокс на одной строке */
.checkbox-wrapper {
  margin: 1.5rem 0;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  font-size: 0.95rem;
}

.checkbox-label input[type="checkbox"] {
  width: 18px;
  height: 18px;
  cursor: pointer;
  flex-shrink: 0;
}

.checkbox-label span {
  line-height: 1.4;
}

.checkbox-error {
  display: block;
  margin-top: 0.5rem;
  margin-left: 1.5rem;
}

/* Ошибки */
.input-error {
  border-color: #e53e3e !important;
  background-color: #fff5f5;
}

.error-message {
  color: #e53e3e;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  margin-bottom: 0.5rem;
  display: block;
}

/* Pure.css стили */
.pure-form-stacked input,
.pure-form-stacked textarea {
  width: 100%;
  margin-bottom: 0.5rem;
}

/* Адаптация */
@media (max-width: 768px) {
  .content-wrapper {
    flex-direction: column;
  }
  
  .contact-info {
    width: 100%;
    border-left: none;
    border-top: 4px solid #2c5530;
  }
  
  .checkbox-label {
    flex-wrap: wrap;
  }
}
</style>