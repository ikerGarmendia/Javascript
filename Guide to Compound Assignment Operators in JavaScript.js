function mathTest() {
    // Inicializar la variable sum
    var sum = 0;
    
    // Número de limones
    var lemons = 250;
    
    // Número de limas
    var limes = 36;
    
    // Sumar la cantidad de limones al total
    sum += lemons; // Equivalente a: sum = sum + lemons;
    
    // Sumar la cantidad de limas al total
    sum += limes;  // Equivalente a: sum = sum + limes;

    // Devolver el total de frutas
    return sum;
}

// Llamar a la función y almacenar el resultado en una variable
var totalFruits = mathTest();

// Imprimir el resultado en la consola
console.log(totalFruits); // Devolverá el total de frutas: 286
