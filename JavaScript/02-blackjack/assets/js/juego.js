/**
 * 2C = Two of Clubs 
 * 2D = Two of Diamonds
 * 2H = Two of Hearts 
 * 2S = Two of Spades 
 */

const miModulo = (() => {
    'use strict'

        
    let     deck = [];
    const   tipos = ['C', 'D', 'H', 'S'],
            especiales = ['A','J', 'Q', 'K'];

    let puntosJugadores = [];

    // referencias del HTML
    const   btnPedir = document.querySelector('#btnPedir'),
            btnDetener = document.querySelector('#btnDetener'),
            btnNuevo = document.querySelector('#btnNuevo'),
            divCartasJugadores = document.querySelectorAll('.divCartas'),
            puntosHTML = document.querySelectorAll('small');

    // esta funcion inicializa el juego
    const inicializarJuego = ( numJugadores = 2) => {
        deck = crearDeck();
        puntosJugadores = [];
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);     
        }
        puntosHTML.forEach( elem => elem.innerText = 0 );
        divCartasJugadores.forEach( elem => elem.innerHTML = '');

        btnPedir.disabled = false;
        btnDetener.disabled = false;
    }
    
    // funcion para crear la baraja 
    const crearDeck = () => {

        for( let i = 2; i<= 10; i++){
            for (let tipo of tipos){
                deck.push(i + tipo);
            }
        }

        for( let esp of especiales){
            for( let tipo of tipos){
                deck.push(esp + tipo);
            }
        }
        return _.shuffle( deck );

    }


    // esta funcion permite tomar una carta de la baraja 
    const perdirCarta = () => {
        const carta = deck.length > 0 ? deck.pop() : 'Lo siento no hay mas cartas en el deck';
        return carta;
    }


    // esta funcion valida el valor de la carta
    const valorCarta = ( carta ) => { 
        const valor = carta.substring(0, carta.length -1 ); 
        return ( isNaN( valor ) ) ?  
                ( valor == 'A' ? 11 : 10) 
                :  valor * 1;
    }

    // Tuno: 0 = primer jugador y el ultimo sera la computadora
    const acumularPuntos = ( carta, turno ) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        puntosHTML[turno].innerHTML = puntosJugadores[turno];
        return puntosJugadores[turno];
    }

    const crearCarta = ( carta, turno ) => {
        const imgCarta = document.createElement('img');
        imgCarta.src =  `assets/cartas/${ carta }.png`;
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append(imgCarta);
    }

    const determinarGanador = () => {
        const [puntosMinimos, puntosComputadora ] = puntosJugadores;
        setTimeout(() =>{
            if(puntosComputadora == puntosMinimos){
                alert(' Hay un empate ');
            } else if ( puntosMinimos > 21 ) {
                alert('La computadora Gana');
            } else if (puntosComputadora > 21){
                alert('El jugador Gana');
            }else if ((puntosJugador <= 21) && (puntosComputadora <= 21) && (puntosJugador > puntosComputadora)){
                alert('El jugador Gana');
            } else {
                alert('La computadora Gana');
            }
        }, 40);
    }
    
    // turno de la computadora
    const turnoComputadora = ( puntosMinimos ) => {

        let puntosComputadora = 0;
        do {
            const carta = perdirCarta();
            puntosComputadora = acumularPuntos( carta, puntosJugadores.length - 1 );
            crearCarta ( carta, puntosJugadores.length - 1 );
        } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21 ));
        determinarGanador();
    }


    // eventos
    btnPedir.addEventListener('click', () =>{
        const carta = perdirCarta();
        const puntosJugador = acumularPuntos( carta, 0);

        crearCarta ( carta, 0 );

        if( puntosJugador > 21){
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora( puntosJugador );
        }else if( puntosJugador === 21) {
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora( puntosJugador );
        }

    });

    btnDetener.addEventListener('click', () =>{
    
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(  puntosJugadores[0] );
    });


    btnNuevo.addEventListener('click', () => {
        inicializarJuego();

    });

    return {
        nuevoJuego: inicializarJuego
    };

})();
















