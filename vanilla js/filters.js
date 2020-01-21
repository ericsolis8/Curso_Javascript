var numeros = [10,2,3,5,9,20,22];

/* var numeros_pares = [];

for(var i=numeros.length; i>=0; i--) {
    var numero = numeros[i];
    if(numero % 2 == 0) {
        numeros_pares.push(numero);
    }
}
*/ 

// Sintaxis ES5 

var numeros_pares = numeros.filter(function(numero) {
    return numero % 2 === 0;
});

console.log(numeros_pares);