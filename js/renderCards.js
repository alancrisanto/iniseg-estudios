import cardsData from "./cardsData.js";

// Obtener el elemento contenedor de las tarjetas
const cardContainer = document.querySelector(".cards");
const btnVerMas = document.querySelector(".btn-ver-mas");

// Definir la cantidad de tarjetas a cargar inicialmente y el incremento por clic
const cardsPorCarga = 6;
let cardsCargadas = 0;

// Función para cargar las tarjetas adicionales
function cargarTarjetas() {
  // Calcular el índice inicial y final de las tarjetas a cargar
  const indiceInicio = cardsCargadas;
  const indiceFin = cardsCargadas + cardsPorCarga;

  // Verificar si hay más tarjetas por cargar
  if (indiceInicio >= cardsData.length) {
    // Si no hay más tarjetas, ocultar el botón "Ver Más"
    btnVerMas.style.display = "none";
    return; // Salir de la función
  }

  // Generar el HTML para las tarjetas adicionales
  const tarjetasHTML = cardsData
    .slice(indiceInicio, indiceFin)
    .map((card) => {
      return `<article class="main-col-courses-card">
                <figure class="main-col-course-image">
                  <div class="blur-load">
                    <img src="${card.img}" alt="imagen de ${card.description}" loading="lazy" >
                  </div>
                  <figcaption class="course-img-text">
                    <p>${card.title}</p>
                    <p>${card.description}</p>
                  </figcaption>
                </figure>
                <div class="main-col-course-detail">
                  <div class="course-detail-mob">
                    <div class="course-detail-mob-info">
                      <p>Duración</p>
                      <p>${card.duracion}</p>
                    </div>
                    <div class="course-detail-mob-info">
                      <p>Créditos</p>
                      <p>${card.creditos}</p>
                    </div>
                    <div class="course-detail-mob-info">
                      <p>Modalidad</p>
                      <p>${card.modalidad}</p>
                    </div>
                    <div class="course-detail-mob-info">
                      <p>&euro;<span>${card.priceBefore}</span></p>
                      <p>&euro;<span>${card.priceNow}</span></p>
                    </div>
                  </div>
                  <div class="course-detail-pricing">
                    <p>En colaboracion con:</p>
                    <div class="course-detail-img">
                      <img src="${card.imgInstitution}" alt="Logo de ${card.institution}">
                    </div>
                    <div class="course-detail-price">
                      <div class="price-before">
                        <span>Antes</span><br>
                        <h6>&euro; <span>${card.priceBefore}</span></h6>
                      </div>
                      <div class="price-now">
                        <span>Ahora</span><br>
                        <h5>&euro; <span>${card.priceNow}</span></h5>
                      </div>
                    </div>
                  </div>
                  <div class="course-detail-info">
                    <div class="course-detail-info-icons">
                      <div class="course-icon-1">
                        <img src="${card.icon1}" alt="Iniseg ícono duracion">
                        <p><span class="icon-text-mobile">Duración: </span>${card.duracion}</p>
                      </div>
                      <div class="course-icon-1">
                        <img src="${card.icon2}" alt="Iniseg ícono créditos">
                        <p><span class="icon-text-mobile">Créditos: </span>${card.creditos}</p>
                      </div>
                      <div class="course-icon-1">
                        <img src="${card.icon3}" alt="Iniseg ícono Online">
                        <p><span class="icon-text-mobile">Modalidad: </span>${card.modalidad}</p>
                      </div>
                    </div>
                    <div class="course-detail-info-btns">
                      <div class="course-btn btn-ver-info">
                        <a href="${card.linkMasInfo}" target="_blank" rel="noopener noreferer">Ver Más Info</a>
                      </div>
                      <div class="course-btn btn-matricula">
                        <a href="">Admisión</a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>`;
    })
    .join(""); // Convertir el array en una cadena de texto

  // Agregar las tarjetas al contenedor
  cardContainer.innerHTML += tarjetasHTML;

  // Actualizar la cantidad de tarjetas cargadas
  cardsCargadas += cardsPorCarga;
  coloresCards();
  lazyLoad();
}

// Cargar las primeras tarjetas al iniciar la página
cargarTarjetas();

// Agregar un evento click al botón "Ver Más"
btnVerMas.addEventListener("click", cargarTarjetas);

// ALTERNAR COLORES EN CARDS

function coloresCards() {
  const bgBlues = document.querySelectorAll(".course-img-text");

  bgBlues.forEach((blue, index) => {
    if (index % 3 === 0) {
      // blue.style.backgroundColor = "rgba(34,44,63,0.7)"; // Color blue
      blue.style.setProperty("--pseudo-element-color-main", "var(--blue)"); // Asignar color a pseudo elemento after
      blue.style.setProperty("--pseudo-element-color", "var(--red)"); // Asignar color a pseudo elemento after
    } else if (index % 3 === 1) {
      // blue.style.backgroundColor = "rgba(251,192,9,0.5)"; // Color Yellow
      blue.style.setProperty("--pseudo-element-color-main", "var(--main-yellow)"); // Asignar color a pseudo elemento after
      blue.style.setProperty("--pseudo-element-color", "var(--blue-card)"); // Asignar color a pseudo elemento after
    } else {
      // blue.style.backgroundColor = "rgba(222,29,39,0.7)"; // Color Red
      blue.style.setProperty("--pseudo-element-color-main", "var(--red)"); // Asignar color a pseudo elemento after
      blue.style.setProperty("--pseudo-element-color", "var(--main-yellow)"); // Asignar color a pseudo elemento after
    }
  });
}

// LAZY LOADING BLUR IMAGES
// LAZY LOADING BLUR IMAGES
function lazyLoad() {
  const blurDivs = document.querySelectorAll(".blur-load");
  

  blurDivs.forEach((div) => {
    const img = div.querySelector("img");

    function loaded() {
      div.classList.add("loaded");
    }

    if (img.complete) {
      loaded();
    } else {
      img.addEventListener("load", loaded);
    }
  });
}

lazyLoad();

