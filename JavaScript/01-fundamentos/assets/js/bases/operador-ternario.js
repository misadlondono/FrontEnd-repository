const dia =1;
const horaActual = 10;

let horApertura;
let mensaje;

//if( [0,6].includes( dia )){
//   console.log('Fin de semana');
//    horApertura = 9;
//} else {
//    console.log('Dia de semana');
//    horApertura = 11;
//}


horApertura = ( [0,6].includes( dia )) ? 9 : 11;

mensaje = (horaActual >= horApertura) ? 'Esta abierto' : `Esta cerrado, hoy abrimos a las ${ horApertura}`;

console.log(mensaje);







