// PAGE LOADER

    window.onload = function(){
      var contCarga = document.getElementById('contenedor_carga');
  
      contCarga.style.visibility = 'hidden';
      contCarga.style.opacity = '0';
  
  }

// STICKY NAVBAR
window.onscroll = function() {
  myFunction()
};

let navbar = document.querySelector('.navbar');
let navMenuShow = document.querySelector('.nav-menu')
let sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    navMenuShow.classList.add('nav-menu-sticky')
  } else {
    navbar.classList.remove("sticky");
    navMenuShow.classList.remove('nav-menu-sticky')
  }
}
// FUNCIONES PARA BOTONES MENU RESPONSIVE
const dropdownMenus = document.querySelectorAll('.dropdown-menu');
const toggleNavbar = document.querySelector('.toggle-navbar');
const navMenu = document.querySelector('.nav-menu');

dropdownMenus.forEach(function(dropdownMenu) {
  dropdownMenu.previousElementSibling.addEventListener('click', function () {
    if(window.innerWidth < 994) {
      dropdownMenu.classList.add('show');
      toggleNavbar.classList.add('hide');
    }
  });
  
  const dropdownClose = dropdownMenu.querySelector('.dropdown-close');
  dropdownClose.addEventListener('click', function () {
    if(window.innerWidth < 994) {
      dropdownMenu.classList.remove('show');
      toggleNavbar.classList.remove('hide');
    }
  });
});

// FUNCIÓN BOTÓN HAMBURGUESA / CLOSE  --MENÚ
toggleNavbar.addEventListener('click', function () {
	if(window.innerWidth < 994) {
		navMenu.classList.toggle('show');

		if(navMenu.classList.contains('show')) {
			this.classList.replace('bi-list', 'bi-x-circle-fill');
		} else {
			this.classList.replace('bi-x-circle-fill', 'bi-list');
		}
	}
})

// ### FUNCION PARA CAMBIAR LA IMAGEN DEL LOGO 

const logo = document.querySelector('.logo');
const navbarMenu = document.querySelector('nav');
const navbarStyle = window.getComputedStyle(navbarMenu);

// SELECCIONAR IMAGEN AL ABRIR LA PÁGINA

if (navbarStyle.backgroundColor === 'rgba(0, 0, 0, 0)'){
  logo.src = 'assets/images/menu/nombre-blanco.png';
} else {
  logo.src = 'assets/images/menu/nombre-azul.png';
}

// CAMBIAR LA IMAGEN UNA VEZ CARGADA LA PÁGINA DE ACUERDO AL BACKGROUND-COLOR
let images = [
  'assets/images/menu/logo-blanco.png',
  'assets/images/menu/nombre-blanco.png',
];

let imagesBlue = [
  'assets/images/menu/logo-azul.png',
  'assets/images/menu/nombre-azul.png',
]
let currentImageIndex = 0;

// FUNCIÓN CAMBIAR LA IMAGEN CADA 3.5 SEGUNDOS
function changeLogo() {
  logo.classList.add('hidden');
  setTimeout(function() {
    if (navbarStyle.backgroundColor === 'rgba(0, 0, 0, 0)'){
      logo.src = images[currentImageIndex];
    } else {
      logo.src = imagesBlue[currentImageIndex];
    }
    logo.classList.remove('hidden');
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }, 1000);
}

setInterval(changeLogo, 3000);

// ### FIN FUNCION PARA CAMBIAR LA IMAGEN DEL LOGO 

// FUNCIÓN PERMITIR QUE UN SOLO CHECKBOX SEA ACTIVADO EN TIPO DE TITULACIÓN
function seleccionarCheckbox(event) {
  let checkboxes = document.querySelectorAll('.checkbox-titulación');

  checkboxes.forEach(function(checkbox) {
    if (checkbox !== event.target) {
      checkbox.checked = false;
    }
  });
}

// FUNCIÓN ACTUALIZAR TITULO DE PÁGINA AL DAR CLICK EN UN CHECKBOX
function actualizarTitulo() {
  let checkboxes = document.querySelectorAll('.checkbox-titulación');
  let titulo = document.querySelector('.main-title');
  let nuevoTitulo = "";

  for (let i = 0; i < checkboxes.length; i++) {
    let checkbox = checkboxes[i];
    let etiqueta = checkbox.parentNode;
    
    if (checkbox.checked) {
      nuevoTitulo += etiqueta.textContent.trim() + " ";
    }
  }

  if (nuevoTitulo === "") {
    nuevoTitulo = "Másteres Oficiales";
  }

  titulo.textContent = nuevoTitulo;
}

// LIMPIAR FILTROS AL DAR CLICK EN BOTON
const btnFiltro = document.querySelector(".btn-limpiar-filtro");

function clearFilter(){
  let checkboxes = document.querySelectorAll('.checkboxes');
  checkboxes.forEach((checkbox)=> {
    checkbox.checked = false;
    actualizarTitulo();
  })

}

btnFiltro.addEventListener("click", clearFilter)

//Animar icon + menu footer

const elementosH3 = document.querySelectorAll(".animate");

function alternarClase(event) {
  // Agregar o quitar la clase 'rotate' al elemento h3 clickeado
  event.currentTarget.classList.toggle("rotate");
}

elementosH3.forEach(elemento => {
  elemento.addEventListener("click", alternarClase);
});