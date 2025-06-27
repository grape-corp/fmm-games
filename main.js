import { renderCarousel } from "/components/core/carousel.js";

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

// page load
document.addEventListener('DOMContentLoaded', () => {
    renderCarousel(cardsData, '#carousel-1');
    renderCarousel(cardsData, '#carousel-2');

    // load config
    fetch('config.grape')
        .then(res => res.text())
        .then(text => JSON.parse(text))
        .then(config => {
            document.title = config.title;

            const leftLink = document.querySelector('#header-left a');
            const rightLink = document.querySelector('#header-right a');

            leftLink.href = config.headerLinks.left.url;
            leftLink.innerText = config.headerLinks.left.text;
            leftLink.title = config.headerLinks.left.title;

            rightLink.href = config.headerLinks.right.url;
            rightLink.innerText = config.headerLinks.right.text;
            rightLink.title = config.headerLinks.right.title;

        })
        .catch(err => console.error("Failed to load config:", err));
});
