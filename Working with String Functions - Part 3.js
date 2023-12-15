
function strings() {
    // Cadena original
    var str = "The five boxing wizards jump quickly";

    // Utilizar indexOf para encontrar la primera aparición de 'w' y luego usar slice para obtener la subcadena desde ese punto hasta el final
    return str.slice(str.indexOf('w'));
}

// Llamar a la función e imprimir el resultado en la consola
console.log(strings()); // Salida: "wizards jump quickly"
