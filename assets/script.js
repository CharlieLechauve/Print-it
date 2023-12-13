const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dots = document.querySelector('.dots');
const bannerImg = document.querySelector('.banner-img');

let indice = 0;

function main() {
    createDots();
    prevSlide();
    nextSlide();
}

main()



function createDots() {
    
    for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dots.appendChild(dot);

    if (i === indice) {
        dot.classList.add("dot_selected");
        }
    }
}



function upgradeCarousel(direction) {

    if (indice === -1 && direction === 'left') {
        indice = slides.length - 1;
    } else if (indice === slides.length && direction === 'right') {
        indice = 0;
    }

    const imagePath = `assets/images/slideshow/${slides[indice].image}`;
    bannerImg.src = imagePath;
    bannerImg.alt = `Slide ${indice + 1}`;

    const tagLine = slides[indice].tagLine;
    document.querySelector('p').innerHTML = tagLine;

    console.log(`Clic ${direction}`);
}



function upgradeDots() {

    const dotsContainer = dots.children;
    for (let i = 0; i < slides.length; i++) {
        const dot = dotsContainer[i];
        if (i === indice) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
    }
}



function prevSlide () {
    arrowLeft.addEventListener("click", () => {
        indice = (indice - 1); 
        upgradeCarousel("left");
        upgradeDots();
    });
}



function nextSlide () {
    arrowRight.addEventListener("click", () => {
        indice = (indice + 1);
        upgradeCarousel("right");
        upgradeDots();
    });
}



