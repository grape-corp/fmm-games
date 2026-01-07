export function renderCarousel(data, selector) {
    const carousel = document.querySelector(selector);
    if (!carousel) return;

    carousel.innerHTML = '';

    data.forEach(card => {
        const cardEl = document.createElement('div');
        cardEl.className = 'card';
        cardEl.innerHTML = `<h3>${card.title}</h3><p>${card.description}</p>`;
        carousel.appendChild(cardEl);
    });
}