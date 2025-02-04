
//elenco delle immagini
const images = [
    'alien.png',
    'bug.png',
    'spaceship.png',
    'duck.png',
    'bug.png',
    'alien.png',
    'tiktac.png',
    'rocket.png',
    'spaceship.png',
    'rocket.png',
    'tiktac.png',
    'duck.png',
]

const wrapper = document.getElementById('wrapper');

let sortedCards = images.sort(() => (Math.random() > .5) ? 2 : -1);
console.log(sortedCards)

for (let i = 0; i < sortedCards.length; i++) {

    let card = document.createElement('div');
    card.classList.add('cards');

    let backImg = document.createElement('img');
    backImg.src = "./images/back.png";
    backImg.alt = `image-back-${i}`;

    let frontImg = document.createElement('img');
    frontImg.src = `./images/${images[i]}`;
    frontImg.alt = `image-${i}`;
    frontImg.classList.add('clickable');

    card.appendChild(backImg);
    card.appendChild(frontImg);
    wrapper.appendChild(card);
    
    
}


function showImage(i) {
    const idImage = document.querySelector(`image-${i}`)

    console.log(idImage)
    
}

