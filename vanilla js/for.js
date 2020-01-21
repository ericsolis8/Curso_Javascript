/*La instrucción for crea un bucle que consta de tres expresiones opcionales, encerradas entre paréntesis y separadas por punto y coma, seguidas de una instrucción (generalmente una instrucción de bloque ) que se ejecutará en el bucle.
*/

let numero = "";

for(var i=0; i < 9; i++) {
    numero = numero + i;
}
console.log(numero);


// for
for(var i =0; ; i++) {
    console.log(i);
    if(i > 6) { // condicion
        break;
    }
}