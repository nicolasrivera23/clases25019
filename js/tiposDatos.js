console.log("********* Tipos de datos *********");
/*Tipos de datos*/

/*Variables numéricas*/
let numeroUno = 1;
let numeroDos = 2;

let decimalUno = 2.2;

/* Cadenas de texto*/
let cadenaDeTexto = "Bienvenidos al party";

console.log(cadenaDeTexto);

/* Booleanas (verdadero o false) */
let esMayor = true;

let numeroTres = 3;

let numeroObjeto = new Number(123);

console.log("objeto Number : " + numeroObjeto);

let numeroExtraidoForm = "33";

console.log("Tipo del dato : " + typeof numeroExtraidoForm);

/*funcion : es un algoritmo que soluciona cierta problemática */

let stringConvertidoNumber = parseInt(numeroExtraidoForm);

console.log("String Parseado a Number : " + typeof stringConvertidoNumber);

let stringDecimal = "3,33";
console.log("stringDecimal tipo " + typeof stringDecimal);

let stringConvertidaADecimal = parseFloat(stringDecimal);
console.log("stringConvertidaADecimal tipo : " + typeof stringConvertidaADecimal);
console.info(stringConvertidaADecimal);

let suma = stringConvertidaADecimal + 3;

console.log("Suma : " + suma);


console.log("********* Tipos de datos *********");