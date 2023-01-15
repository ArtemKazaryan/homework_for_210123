/* helpers.js */
export const getSelectedCurrency = () => {
	// my code
    const currency = document.querySelector(".cards .card.active");
    return currency.textContent
};

// Пользователь выбирает валюту по клику на кнопку. При нажатии на карточку добавляется класс `active` к текущей карточке и удаляется из предыдущей. Так за один клик можно выбрать только одну валюту. Завершите функцию, чтобы она возвращала текст выбранной пользователем карточки.

// Позанимайтесь отлакдкой кода. Посмотрите как добавляется `.active` выбранной карточке. Также обратите внимание, как данный класс удаляется с выбранной ранее карточки.