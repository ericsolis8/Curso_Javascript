/*
    forEach() ejecuta el proporcionado callback una vez para cada 
    elemento presente en la matriz en orden ascendente. 
    No se invoca para las propiedades de índice que se han eliminado
     o no se han inicializado (es decir, en matrices dispersas).

    un callback se invoca con tres argumentos :

    el valor del elemento
    el índice del elemento
    la matriz que se atraviesa
*/
const names = ['jose', 'karla', 'juan', 'flor'];

// 1er recorrido
names.forEach(function(item) {
    console.log(item);
});

// 2do recorrido
console.log(' ');
names.forEach(element => console.log(element));


/* Array.reverse
    Este método invierte los elementos de una matriz. El primer elemento 
    de la matriz se convierte en el último, y el último elemento de la 
    matriz se convierte en el primero.
*/
console.log(' ');

const normal = ['uno', 'dos', 'tres'];
console.log('Normal => ', normal);

const reversed = normal.reverse();
console.log('Reversed => ', reversed);

