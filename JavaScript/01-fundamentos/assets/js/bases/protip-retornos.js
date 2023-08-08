const crearPersona = ( nombre, apellido) => ({  nombre, apellido });

const persona = crearPersona ( 'Misael', ' Londoño');

console.log(persona);



function imprimerAgumentos(){
    console.log(arguments);
}

const imprimerAgumentos2 = ( edad, ...args) => {
    console.log({ edad, args});
}


const {apellido: nuevoApellido} = crearPersona('Miasael', 'Londoño');
console.log(nuevoApellido);

imprimerAgumentos(10, true, false, 'Misael', 'Hola');

imprimerAgumentos2(20, true, false, 'Misael', 'Hola');


const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],

};

const imprimerPropiedades = ( personae) => {

}


