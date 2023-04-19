const personas = [
  {
    name: 'Lorenzo',
    lastname: 'el alto'
  },
  {
    name: 'Juan Pablo',
    lastname: 'el amigo de AMLO'
  },
  {
    name: 'Yago',
    lastname: 'el del BNG'
  }
];
const armas = [
  {
    name: 'Array',
    weight: 500
  },
  {
    name: 'Array de Objetos',
    weight: 490.5
  },
  {
    name: 'Bucle Infinito',
    weight: 9999
  }
];
const habitaciones = [
  {
    name: 'el Aula 0101'
  },
  {
    name: 'la UAX'
  }
];

function getCluedo() {
  let persona = personas[Math.floor(Math.random() * (personas.length))];
  let habitacion = habitaciones[Math.floor(Math.random() * (habitaciones.length))];
  let arma = armas[Math.floor(Math.random() * (armas.length))];
  return `${persona.name} ${persona.lastname} mató a Christian en ${habitacion.name} con un ${arma.name} de ${arma.weight} Kgs`;
}

console.log(getCluedo());
