// // Array de datos de las cards
// const datosCards = [
//   { titulo: 'Card 1', contenido: 'Contenido de la card 1' },
//   { titulo: 'Card 2', contenido: 'Contenido de la card 2' },
//   { titulo: 'Card 3', contenido: 'Contenido de la card 3' },
//   { titulo: 'Card 4', contenido: 'Contenido de la card 4' },
//   { titulo: 'Card 5', contenido: 'Contenido de la card 5' },
//   { titulo: 'Card 6', contenido: 'Contenido de la card 6' },
//   { titulo: 'Card 7', contenido: 'Contenido de la card 7' },
//   // Agrega más datos de cards aquí
// ];

// // Variables para el seguimiento del estado
// let cardsMostradas = 0;
// const cardsPorPagina = 3;

// // Función para mostrar las cards
// function mostrarCards() {
//   const cardContainer = document.querySelector('.cards-container');
//   cardContainer.innerHTML = '';

//   for (let i = 0; i < cardsMostradas; i++) {
//     const card = datosCards[i];
//     const cardElement = document.createElement('article');
//     cardElement.classList.add('main-col-courses-card');
//     cardElement.innerHTML = `
//       <h3>${card.titulo}</h3>
//       <p>${card.contenido}</p>
//     `;
//     cardContainer.appendChild(cardElement);
//   }
// }

// // Función para manejar el clic en el botón "Ver más"
// function verMas() {
//   cardsMostradas += cardsPorPagina;
//   if (cardsMostradas >= datosCards.length) {
//     document.querySelector('.btn-ver-mas').style.display = 'none';
//   }
//   mostrarCards();
// }

// // Event listener para el botón "Ver más"
// document.querySelector('.btn-ver-mas').addEventListener('click', verMas);

// // Mostrar las primeras cards al cargar la página
// mostrarCards();


// Array de datos de las cards
const datosCards = [
  { titulo: 'Card 1', contenido: 'Contenido de la card 1' },
  { titulo: 'Card 2', contenido: 'Contenido de la card 2' },
  { titulo: 'Card 3', contenido: 'Contenido de la card 3' },
  { titulo: 'Card 4', contenido: 'Contenido de la card 4' },
  { titulo: 'Card 5', contenido: 'Contenido de la card 5' },
  { titulo: 'Card 6', contenido: 'Contenido de la card 6' },
  { titulo: 'Card 7', contenido: 'Contenido de la card 7' },
  // Agrega más datos de cards aquí
];

// Variables para el seguimiento del estado
let cardsMostradas = 0;
const cardsPorPagina = 3;

// Función para mostrar las cards
function mostrarCards() {
  const cardContainer =  document.querySelector('.cards-container');
  cardContainer.innerHTML = '';

  datosCards.slice(0, cardsMostradas).forEach((card, index) => {
    const cardElement = document.createElement('article');
    cardElement.classList.add('main-col-courses-card');
    cardElement.innerHTML = `
      <h3>${card.titulo}</h3>
      <p>${card.contenido}</p>
    `;
    cardContainer.appendChild(cardElement);
  });
}

// Función para manejar el evento clic del botón "Ver más"
function verMas() {
  cardsMostradas += cardsPorPagina;
  mostrarCards();

  // Ocultar el botón "Ver más" si no hay más cards para mostrar
  if (cardsMostradas >= datosCards.length) {
    document.querySelector('.btn-ver-mas').style.display = 'none';
  }
}

// Asignar el evento clic al botón "Ver más"
document.querySelector('.btn-ver-mas').addEventListener('click', verMas);

// Mostrar las cards iniciales
mostrarCards();
