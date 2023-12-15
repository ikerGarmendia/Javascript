var someUser = {
    name: 'Blank'
};

function changeName(user) {
    user.name = 'Jordan';
}

changeName(someUser);

// Verificar el cambio
console.log(someUser.name);  // Devuelve "Jordan"
