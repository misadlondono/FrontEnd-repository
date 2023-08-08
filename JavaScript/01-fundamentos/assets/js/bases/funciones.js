function saludar(nombre){
    console.log(arguments);
    console.group('HOLA ' + nombre);
    return 1;
};

const saludar2 = function (nombre){
    console.log('Hola ' + nombre + 'Soy Saludar 2');
};

const saludarFlecha = () => {
    console.log('Hola soy saludarFlecha');
};

const saludarFlecha2 = (nombre) => {
    console.log('Hola ' + nombre+ ' soy saludarFlecha');
};

const retornoSaludar = saludar('Misael', 16, true, 'Colombia');
console.log(retornoSaludar);
//saludar2('Misael');
//saludarFlecha();
//saludarFlecha2('Misael');

function sumar(a, b){
    return a + b;
}

const sumar2 = (a, b) => a + b;

function getAleatorio() {
    return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log( getAleatorio2());