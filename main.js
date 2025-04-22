const cardsData = [
    { title: "Card 1", description: "This is the first card." },
    { title: "Card 2", description: "This is the second card." },
    { title: "Card 3", description: "Lorem ipsum dolor sit amet." },
    { title: "Card 4", description: "Here's another one." },
    { title: "Card 5", description: "You get the idea!" },
    { title: "Card 6", description: "More cards, more fun." },
    { title: "Card 7", description: "Lucky number seven." },
    { title: "Card 8", description: "Eight is great." },
    { title: "Card 9", description: "Almost there." },
    { title: "Card 10", description: "Boom, ten!" }
];

function renderCarousel(data, selector) {
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

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', () => {
    renderCarousel(cardsData, '#carousel-1'); 
    renderCarousel(cardsData, '#carousel-2');
});
