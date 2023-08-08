let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono' ];
console.log('Largo: ', juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

console.log({primero, ultimo});

juegos.forEach( (elemento, indice, arr) =>{
    console.log({elemento, indice, arr});
});

console.log(juegos.push( 'F-Zelda'));
console.log(juegos.unshift('Fire Emblame')); 
console.log(juegos.pop());
console.log(juegos);
console.log(juegos.splice(1, 2));

console.log(juegos.indexOf('Metroid'));