// validation.js
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('feedbackForm');
  if (!form) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Сброс ошибок
    document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
    document.querySelectorAll('.error-message').forEach(el => el.remove());

    let isValid = true;

    // === Валидация ФИО (минимум 2 слова) ===
    const fullnameInput = document.getElementById('fullname');
    const fullname = fullnameInput.value.trim();
    if (!fullname) {
      showError(fullnameInput, 'Поле обязательно для заполнения');
      isValid = false;
    } else {
      const words = fullname.split(/\s+/).filter(w => w.length > 0);
      if (words.length < 2) {
        showError(fullnameInput, 'Введите минимум два слова (например, Иван Иванов)');
        isValid = false;
      }
    }

    // === Валидация Email ===
    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      showError(emailInput, 'Поле обязательно для заполнения');
      isValid = false;
    } else if (!emailRegex.test(email)) {
      showError(emailInput, 'Введите корректный email');
      isValid = false;
    }

    // === Валидация Телефона (минимум 10 цифр) ===
    const phoneInput = document.getElementById('phone');
    const phone = phoneInput.value.trim();
    const phoneDigits = phone.replace(/\D/g, '');
    if (!phone) {
      showError(phoneInput, 'Поле обязательно для заполнения');
      isValid = false;
    } else if (phoneDigits.length < 10) {
      showError(phoneInput, 'Введите минимум 10 цифр');
      isValid = false;
    }

    // === Чекбокс согласия ===
    const agreement = document.getElementById('agreement');
    if (!agreement.checked) {
      // Pure.css не поддерживает стилизацию чекбокса напрямую,
      // поэтому просто покажем общую ошибку
      alert('Пожалуйста, подтвердите согласие на обработку данных');
      isValid = false;
    }

    // === Отправка ===
    if (isValid) {
      const formData = {
        fullname: fullname,
        email: email,
        phone: phone,
        message: document.getElementById('message').value.trim() || '(не заполнено)'
      };

      // Генерируем кастомное событие
      const event = new CustomEvent('formValid', { detail: formData });
      document.dispatchEvent(event);

      // Опционально: показать сообщение
      alert('Форма отправлена! Данные в консоли.');
    }
  });

  // Функция показа ошибки
  function showError(input, message) {
    input.classList.add('input-error');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    input.parentNode.appendChild(errorDiv);
  }

  // Сброс ошибок при вводе
  document.querySelectorAll('#fullname, #email, #phone').forEach(input => {
    input.addEventListener('input', () => {
      input.classList.remove('input-error');
      const error = input.parentNode.querySelector('.error-message');
      if (error) error.remove();
    });
  });
});