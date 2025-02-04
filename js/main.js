
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

//individuare il contenitore principale dove vengono caricate le immagini
const wrapper = document.getElementById('wrapper');

//individuare l'area dove verranno presentati gli errori
const errors = document.getElementById('errors');

//creare un contatore per calcolare le coppie errate e impostarlo a 0
let wrongImg = 0;

//creare un array vuoto dove verrano inserite le coppie per il confronto
let selectedCards = []

//mescolare in ordine casuale le carte
let sortedCards = images.sort(() => Math.random() - 0.5 );
//console.log(sortedCards)

//costruire il markup di base delle cards e delle immagini mostrando solo il retro
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

    //abilitare per ogni carta la possibilità di cambiare al click
    card.addEventListener('click', () => {

        //se l'array è vuoto
        if (selectedCards.length < 2 && !selectedCards.includes(card)) {
            backImg.classList.add('hide-back'); // mostrare solo il retro della cards
            frontImg.classList.remove('clickable'); //nascondere l'immagine principale
            selectedCards.push({ card, frontImg }); //inserire nel nuovo array le coppie selezionate

            if (selectedCards.length === 2) { //se l'array per il confronto presenta due carte
                setTimeout(checkMatch, 800); //impostare una funzione che confronti le due carte per 0.8 secondi
            }
        }
       
    })

    //inserire i vari elementi nel DOM
    card.appendChild(backImg);
    card.appendChild(frontImg);
    wrapper.appendChild(card);
    

}

//funzione per confrontare due carte
function checkMatch() {
    const [first, second] = selectedCards;

    // se le immagini non corrispondono
    if (first.frontImg.src !== second.frontImg.src) {


        first.frontImg.classList.add('clickable'); //la prima immagine deve essere coperta
        second.frontImg.classList.add('clickable'); // la seconda immagine deve essere coperta
        first.card.querySelector('.back-image').classList.remove('hide-back'); //mostrare il retro della prima immagine
        second.card.querySelector('.back-image').classList.remove('hide-back'); //mostrare il retro della seconda immagine
       
        wrongImg++ //incrementare il contatore
        errors.innerHTML = `Errori: ${wrongImg}` //stampare il numero di errori
        
    }

    selectedCards = [] //svuotare l'array dopo il confronto; 
}



