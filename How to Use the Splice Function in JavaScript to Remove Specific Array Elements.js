var array = ['Altuve', 'Bregman', 'Correa', 'Springer'];

var removedItem = array.splice(0, 3);

console.log(removedItem); // Devuelve ['Altuve', 'Bregman', 'Correa']
console.log(array);  // Devuelve ['Springer']
