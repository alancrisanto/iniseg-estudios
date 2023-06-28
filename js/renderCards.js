import cardsData from "./data.js";

console.log(cardsData);


// Obtener el elemento contenedor de las tarjetas
const container = document.querySelector('.cards-container');

// Generar las tarjetas utilizando forEach y template strings
cardsData.forEach(card => {
  const cardHTML = `<article class="main-col-courses-card">
                      <figure class="main-col-course-image">
                        <img src=${card.img} alt=${card.description}>
                        <figcaption class="course-img-text">
                          <p>${card.title}</p>
                          <p>${card.description}</p>
                        </figcaption>
                      </figure>
                      <div class="main-col-course-detail">
                        <div class="course-detail-pricing">
                          <div class="course-detail-mobile">
                            <h3>
                              ${card.titleMobile}
                            </h3>
                          </div>
                          <div class="course-detail-img">
                            <img src=${card.imgDetail} alt="Ecampus Iniseg">
                          </div>
                          <div class="course-detail-price">
                            <div class="price-before">
                              <span>Antes</span><br>
                              <h6>$<span>${card.priceBefore} EUR</span></h6>
                            </div>
                            <div class="price-now">
                              <span>Ahora</span><br>
                              <h5>$<span>${card.priceNow} EUR</span></h5>
                            </div>
                          </div>
                        </div>
                        <div class="course-detail-info">
                          <div class="course-detail-info-icons">
                            <div class="course-icon-1">
                              <img src=${card.icon1} alt="Iniseg duración">
                              <p><span class="icon-text-mobile">Duración: </span>${card.duracion}</p>
                            </div>
                            <div class="course-icon-1">
                              <img src=${card.icon2} alt="Iniseg créditos">
                              <p><span class="icon-text-mobile">Créditos: </span>${card.creditos}</p>
                            </div>
                            <div class="course-icon-1">
                              <img src=${card.icon3} alt="Iniseg Online">
                              <p><span class="icon-text-mobile">Modalidad: </span>${card.modalidad}</p>
                            </div>
                          </div>
                          <div class="course-detail-info-btns">
                            <div class="course-btn btn-ver-info">
                              <a href="">Ver Más Info Aquí</a>
                            </div>
                            <div class="course-btn btn-matricula">
                              <a href="">Matricularme Ahora</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article> `;

  // Agregar la tarjeta al contenedor
  container.innerHTML += cardHTML;
});

// ALTERNAR COLORES EN CARDS

const bgBlues = document.querySelectorAll('.course-img-text');

bgBlues.forEach((blue, index) => {
  if (index % 3 === 0) {
    blue.style.backgroundColor = 'rgba(34,44,63,0.7)'; // Color blue
    blue.style.setProperty('--pseudo-element-color', 'var(--red');
  } else if (index % 3 === 1) {
    blue.style.backgroundColor = 'rgba(251,192,9,0.5)'; // Color Yellow
    blue.style.setProperty('--pseudo-element-color', 'var(--blue-card');
  } else {
    blue.style.backgroundColor = 'rgba(222,29,39,0.7)'; // Color Red
    blue.style.setProperty('--pseudo-element-color', 'var(--main-yellow');
  }
});

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
//   const cardContainer =  document.querySelector('.cards-container');
//   cardContainer.innerHTML = '';

//   datosCards.slice(0, cardsMostradas).forEach((card, index) => {
//     const cardElement = document.createElement('article');
//     cardElement.classList.add('main-col-courses-card');
//     cardElement.innerHTML = `
//       <h3>${card.titulo}</h3>
//       <p>${card.contenido}</p>
//     `;
//     cardContainer.appendChild(cardElement);
//   });
// }

// // Función para manejar el evento clic del botón "Ver más"
// function verMas() {
//   cardsMostradas += cardsPorPagina;
//   mostrarCards();

//   // Ocultar el botón "Ver más" si no hay más cards para mostrar
//   if (cardsMostradas >= datosCards.length) {
//     document.querySelector('.btn-ver-mas').style.display = 'none';
//   }
// }

// // Asignar el evento clic al botón "Ver más"
// document.querySelector('.btn-ver-mas').addEventListener('click', verMas);

// // Mostrar las cards iniciales
// mostrarCards();
