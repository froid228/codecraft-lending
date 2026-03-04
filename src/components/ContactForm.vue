<template>
  <form @submit.prevent="handleSubmit" class="pure-form pure-form-stacked">
    <fieldset>
      <!-- Имя -->
      <label for="fullname">Имя *</label>
      <input
        id="fullname"
        v-model="formData.fullname"
        type="text"
        placeholder="Ваше имя"
        :class="{ 'input-error': errors.fullname }"
        required
      />
      <span v-if="errors.fullname" class="error-message">{{ errors.fullname }}</span>

      <!-- Email -->
      <label for="email">Email *</label>
      <input
        id="email"
        v-model="formData.email"
        type="email"
        placeholder="your@email.com"
        :class="{ 'input-error': errors.email }"
        required
      />
      <span v-if="errors.email" class="error-message">{{ errors.email }}</span>

      <!-- Телефон -->
      <label for="phone">Телефон *</label>
      <input
        id="phone"
        v-model="formData.phone"
        type="tel"
        placeholder="+7(___)___-__-__"
        :class="{ 'input-error': errors.phone }"
        required
      />
      <span v-if="errors.phone" class="error-message">{{ errors.phone }}</span>

      <!-- Сообщение -->
      <label for="message">Сообщение</label>
      <textarea
        id="message"
        v-model="formData.message"
        rows="4"
        placeholder="Опишите вашу задачу"
      ></textarea>

      <!-- Чекбокс согласия -->
      <label class="pure-checkbox">
        <input v-model="formData.agreement" type="checkbox" required />
        Соглашаюсь на обработку персональных данных
      </label>
      <span v-if="errors.agreement" class="error-message">{{ errors.agreement }}</span>

      <!-- Кнопка -->
      <button type="submit" class="pure-button pure-button-primary">Отправить</button>
    </fieldset>
  </form>
</template>

<script setup>
import { ref, reactive } from 'vue'

// Данные формы
const formData = reactive({
  fullname: '',
  email: '',
  phone: '',
  message: '',
  agreement: false
})

// Ошибки
const errors = reactive({
  fullname: '',
  email: '',
  phone: '',
  agreement: ''
})

// Валидация и отправка
const handleSubmit = () => {
  // Сброс ошибок
  errors.fullname = ''
  errors.email = ''
  errors.phone = ''
  errors.agreement = ''

  let isValid = true

  // 1. Проверка имени (минимум 2 слова)
  const words = formData.fullname.trim().split(/\s+/).filter(w => w.length > 0)
  if (words.length < 2) {
    errors.fullname = 'Введите минимум два слова (например, Иван Иванов)'
    isValid = false
  }

  // 2. Проверка Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(formData.email)) {
    errors.email = 'Введите корректный email'
    isValid = false
  }

  // 3. Проверка Телефона (минимум 10 цифр)
  const phoneDigits = formData.phone.replace(/\D/g, '')
  if (phoneDigits.length < 10) {
    errors.phone = 'Введите минимум 10 цифр'
    isValid = false
  }

  // 4. Проверка согласия
  if (!formData.agreement) {
    errors.agreement = 'Необходимо согласие на обработку данных'
    isValid = false
  }

  // Если всё ок — вывод в консоль (как в ПЗ10)
  if (isValid) {
    console.clear()
    console.log('✅ Форма отправлена!')
    console.log('Имя:', formData.fullname)
    console.log('Email:', formData.email)
    console.log('Телефон:', formData.phone)
    console.log('Сообщение:', formData.message || '(не заполнено)')
    console.log('Время:', new Date().toLocaleString())

    alert('Форма отправлена! Данные в консоли.')
    
    // Очистка формы
    formData.fullname = ''
    formData.email = ''
    formData.phone = ''
    formData.message = ''
    formData.agreement = false
  }
}
</script>

<style scoped>
/* Стили ошибок (совместимые с Pure.css) */
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

/* Отступы для полей Pure.css */
.pure-form-stacked input,
.pure-form-stacked textarea {
  width: 100%;
  margin-bottom: 0.5rem;
}

.pure-checkbox {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem 0;
}
</style>