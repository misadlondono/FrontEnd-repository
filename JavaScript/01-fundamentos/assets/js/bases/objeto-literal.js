let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.7
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War'
};

console.log('Nombre ', personaje.nombre);
console.log( personaje);
console.log('Cordenadas', personaje.coords.lat);
console.log('Numero de trajes', personaje.trajes.length);
console.log('Numero de trajes', personaje.trajes[personaje.trajes.length - 1]);

console.log(personaje["ultima-pelicula"]);


delete personaje.edad;
personaje.casado = true;

const entriesPares = Object.entries(personaje);

console.log(entriesPares);

Object.freeze( personaje);

personaje.dinero = 100000;
console.log(personaje);


console.log(Object.getOwnPropertyNames(personaje));
console.log(Object.values(personaje));