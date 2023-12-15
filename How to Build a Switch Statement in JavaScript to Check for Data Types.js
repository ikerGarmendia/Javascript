function switchStatement() {
    var result;
    
    // Utiliza un número arbitrario en este caso
    var value = 7;

    switch (value) {
        case 1:
            result = "one";
            break;
        case 2:
            result = "two";
            break;
        case 3:
            result = "three";
            break;
        // Agrega más casos según sea necesario
        default:
            result = "number";
            break;
    }

    return result;
}

console.log(switchStatement()); // Devuelve "number"
