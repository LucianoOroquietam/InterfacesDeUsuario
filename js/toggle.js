//menu hamburguesa
const menuButton = document.querySelector('.menu-button');
const menuDesplegable = document.querySelector('.nav');

//icono perfil desplegable
const iconoPerfil = document.querySelector('.icono-perfil');
const menuPerfil = document.querySelector('#menu-perfil');


menuButton.addEventListener('click', () => {
    menuDesplegable.classList.toggle('active');
    menuButton.classList.toggle('active');
    
});


iconoPerfil.addEventListener('click', () =>{
    menuPerfil.classList.toggle('active');
});
