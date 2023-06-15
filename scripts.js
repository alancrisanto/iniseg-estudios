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

// BOTÓN HAMBURGUESA / CLOSE  --MENÚ
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


var logo = document.querySelector('.logo');
var images = [
  'assets/images/menu/logo2-azul.png',
  'assets/images/menu/nombre-azul.png',
];
var currentImageIndex = 0;

function changeLogo() {
  logo.classList.add('hidden');
  setTimeout(function() {
    logo.src = images[currentImageIndex];
    logo.classList.remove('hidden');
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }, 1000);
}

setInterval(changeLogo, 3500);
