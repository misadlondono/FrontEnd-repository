const hoy = new Date();

let dia = hoy.getDay();

console.log({dia});

let diaLetras = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
;

console.log( diaLetras[dia] || 'Dia no definido');