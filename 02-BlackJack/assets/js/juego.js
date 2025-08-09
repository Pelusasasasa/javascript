let deck = [];
const tipos = ['C', 'D', 'H', 'S',];
const especiales = ['A', 'J', 'Q', 'K',];
let puntosJugador = 0,
    puntosComputadora = 0; 

const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const btnNuevo = document.querySelector('#btnNuevo');
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');

const puntosHTML =  document.querySelectorAll('small');

const crearDeck = () => {
    for(let i = 2; i <= 10; i++){
        for(const tipo of tipos){
            deck.push(i + tipo)
        };
    };

    for(const tipo of tipos){
        for(const especial of especiales){
            deck.push(especial + tipo)
        };
    };

    deck = _.shuffle(deck);

    console.log(deck)
};

crearDeck();


//Esta funcion permite pedir una carta del deck
const pedirCarta = () => {

    if(deck.length === 0){
        throw 'No hay cartas en el deck'
    };

    const carta = deck.pop();

    return carta;
};

const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return (valor === 'A') 
        ? 11 
        : isNaN(valor) 
            ? 10 
            : valor * 1;
};

const turnoComputadora = (puntosMinimos) => {

    do {
        const carta = pedirCarta();
        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML[1].innerText = puntosComputadora;

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');

        divCartasComputadora.append(imgCarta);

        if(puntosMinimos > 21){
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        quienGano(puntosJugador, puntosComputadora);
    }, 10);
    
};

const quienGano = (puntosJugador, puntosComputadora) => {
    if(puntosJugador > 21){
        alert('Perdiste');
    }else if(puntosComputadora === puntosJugador){
        alert('Nadie Gano')
    }else if(puntosJugador <= 21){
        if(puntosComputadora > 21 || puntosComputadora < puntosJugador){
            alert('Ganaste');
        }else{
            alert('Perdiste');
        } 
    }
}

//Eventos
btnPedir.addEventListener('click', () => {

    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta);

    document.querySelector('small').innerText = puntosJugador;

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');

    divCartasJugador.append(imgCarta);

    if(puntosJugador > 21){
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    }else if(puntosJugador === 21){
        console.warn('Felicidades, llegaste a 21');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    };

    
});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;

    turnoComputadora(puntosJugador);
});

btnNuevo.addEventListener('click', () => {

    deck = [];
    crearDeck();

    puntosComputadora = 0;
    puntosJugador = 0;

    puntosHTML[0].innerText = '0';
    puntosHTML[1].innerText = '0';

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled = false;
    btnDetener.disabled = false;
});