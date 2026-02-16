// consoleLogger.js
document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('formValid', function (event) {
    const data = event.detail;

    // Очищаем консоль
    console.clear();

    // Выводим данные
    console.log(' Форма успешно отправлена!');
    console.log('Имя:', data.fullname);
    console.log('Email:', data.email);
    console.log('Телефон:', data.phone);
    console.log('Сообщение:', data.message);
    console.log('Время отправки:', new Date().toLocaleString());
  });
});