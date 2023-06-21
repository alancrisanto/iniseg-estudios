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

// FUNCIÓN CAMBIAR LA IMAGEN CADA 3.5 SEGUNDOS
const logo = document.querySelector('.logo');
let images = [
  'assets/images/menu/logo2-azul.png',
  'assets/images/menu/nombre-azul.png',
];
let currentImageIndex = 0;

function changeLogo() {
  logo.classList.add('hidden');
  setTimeout(function() {
    logo.src = images[currentImageIndex];
    logo.classList.remove('hidden');
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }, 1000);
}

setInterval(changeLogo, 3500);

// FUNCIÓN PERMITIR QUE UN SOLO CHECKBOX SEA ACTIVADO EN TIPO DE TITULACIÓN
function seleccionarCheckbox(event) {
  var checkboxes = document.querySelectorAll('.checkbox-titulación');

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

// ALTERNAR COLORES EN CARDS

const bgBlues = document.querySelectorAll('.img-bg-blue');
const bgReds = document.querySelectorAll('.img-bg-red');

bgBlues.forEach((blue, index) => {
  if (index % 3 === 0) {
    blue.style.borderBottomColor = 'var(--dark-blue)';
  } else if (index % 3 === 1) {
    blue.style.borderBottomColor = 'var(--main-yellow)';
    blue.style.opacity = '0.4'
  } else {
    blue.style.borderBottomColor = 'var(--red)';
    blue.style.opacity = '0.7'
  }
});

bgReds.forEach((red, index) => {
  if (index % 3 === 0) {
    red.style.borderRightColor = 'var(--red)';
  } else if (index % 3 === 1) {
    red.style.borderRightColor = 'var(--blue-card)';
  } else {
    red.style.borderRightColor = 'var(--main-yellow)';
    red.style.opacity = '0.7'
  }
});

