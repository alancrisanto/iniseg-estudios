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


// BOTÓN CARGAR VER MÁS IMÁGENES

let loadMoreBtn = document.querySelector('.btn-ver-mas');
let currentItem = 3;

loadMoreBtn.onclick = () =>{
  console.log("ok")
  let boxes = [...document.querySelectorAll('.main-col-courses-card')];
  console.log(boxes)
  for (var i = currentItem; i < currentItem + 3; i++){
    if (window.innerWidth >= 1024) {
      boxes[i].style.display = 'grid';
    } else {
      boxes[i].style.display = 'flex';
    }
  }
  currentItem += 3;

  if(currentItem >= boxes.length){
    loadMoreBtn.style.display = 'none';
  }
}