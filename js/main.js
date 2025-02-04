
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

const errors = document.getElementById('errors')

let selectedCards = []

let sortedCards = images.sort(() => Math.random() - 0.5 );
//console.log(sortedCards)

for (let i = 0; i < sortedCards.length; i++) {

    let card = document.createElement('div');
    card.classList.add('cards');

    let backImg = document.createElement('img');
    backImg.src = "./images/back.png";
    backImg.alt = `image-back-${i}`;
    backImg.classList.add('back-image');

    let frontImg = document.createElement('img');
    frontImg.src = `./images/${sortedCards[i]}`;
    frontImg.alt = `image-${i}`;
    frontImg.classList.add('clickable');

    card.addEventListener('click', () => {
        if (selectedCards.length < 2 && !selectedCards.includes(card)) {
            backImg.classList.add('hide-back'); 
            frontImg.classList.remove('clickable');
            selectedCards.push({ card, frontImg });

            if (selectedCards.length === 2) {
                setTimeout(checkMatch, 800);
                if(!checkMatch) {
                    console.log('Match trovato')
                }
            }
        }
       
    })

    card.appendChild(backImg);
    card.appendChild(frontImg);
    wrapper.appendChild(card);
    

}


function checkMatch() {
    const [first, second] = selectedCards;

    if (first.frontImg.src !== second.frontImg.src) {
        console.log('Le immagini non corrispondono');
        first.frontImg.classList.add('clickable');
        second.frontImg.classList.add('clickable');
        first.card.querySelector('.back-image').classList.remove('hide-back');
        second.card.querySelector('.back-image').classList.remove('hide-back');
        
    }

    selectedCards = []; 
}



