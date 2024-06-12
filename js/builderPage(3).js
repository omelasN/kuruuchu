document.addEventListener("DOMContentLoaded", function() {
    const daySelect = document.getElementById("day");
    const monthSelect = document.getElementById("month");
    const yearSelect = document.getElementById("year");

    // Функция для заполнения дней
    for (let i = 1; i <= 31; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        daySelect.appendChild(option);
    }

    // Массив с названиями месяцев
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

    // Функция для заполнения месяцев
    months.forEach((month, index) => {
        const option = document.createElement("option");
        option.value = index + 1; // Месяцы с 1 по 12
        option.textContent = month;
        monthSelect.appendChild(option);
    });

    // Текущий год
    const currentYear = new Date().getFullYear();

    // Функция для заполнения годов
    for (let i = currentYear; i >= 1900; i--) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        yearSelect.appendChild(option);
    }
});



