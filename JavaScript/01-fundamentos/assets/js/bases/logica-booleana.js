const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}


console.warn('Not o la negacion');
console.log(!true);

console.warn('And ');
console.log(true && !false);

console.log('==================');
console.log( regresaFalse() && regresaTrue);

console.log('=========   =========');
console.log( regresaTrue && regresaFalse());


console.warn('OR');
console.log( regresaTrue || regresaFalse());


console.warn('Asignaciones');
const soyUndefined = undefined;
const soyNull = null ;
const soyFalso = false;




