// create an Array
const names = ['jhon', 'dewey', 'carter', 'sheldon'];

// bucle dentro de una matriz
names.forEach(function(item) {
    console.log(item);
    //document.write(item+'</br>');
});

// acces an Array item
const element = names[1]; // dewey
document.write('El nombre de esta posición es: '+element);

// ultima posicion
const last = names[names.length - 1];
document.write("</br>Ultima posición: "+last); 

// add to the end of an Array 
const newName = names.push('olivia'); 
console.log(names);

// remove from the front of an Array
const deleteFirst = names.shift(); 
console.log(names);

// add to the front of an Array
const newFirst = names.unshift('louis') ;
console.log(names);

// remove from the end of an Array
let deleteLast = names.pop();
console.log(names);

// find the index of an item in the Array
const position = names.indexOf('carter') ;
document.write("</br>Su posición es: "+position);

// remove an item by index position (a-z)
let deleteForPosition = names.splice(position, 1);
console.log(names);
