// Objeto de usuario con calificaciones iniciales
var user = {
  name: 'kristine',
  age: 15,
  city: 'scottsdale',
  grades: {
    math: 90,
    science: 80,
    languageArts: 100
  }
};

// Actualizar las calificaciones de inglés
user.grades.english = 87;

// El objeto de calificaciones ahora incluye inglés con una calificación de 87
console.log(user.grades);
