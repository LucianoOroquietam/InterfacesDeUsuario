document.addEventListener('DOMContentLoaded', function () {
    const carrusel = document.querySelector('.carrusel-destacado');
    const flechaIzquierda = document.querySelector('.flecha-izquierda');
    const flechaDerecha = document.querySelector('.flecha-derecha');
    const cardWidth = document.querySelector('.card').offsetWidth; // Ancho de una tarjeta
   
    
    let currentIndex = 0; // Índice actual del carrusel



    function updateNavigationButtons() {
        flechaIzquierda.style.display = currentIndex === 0 ? 'none' : 'block';
        flechaDerecha.style.display = currentIndex === carrusel.children.length - 1 ? 'none' : 'block';
    }

    // Función para desplazar el carrusel hacia la izquierda
    function moveLeft() {
        

        if(currentIndex > 0) {
            currentIndex--;
            carrusel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
           
            updateNavigationButtons();
        }
    }

    // Función para desplazar el carrusel hacia la derecha
    function moveRight() {
        
        if (currentIndex < carrusel.children.length - 1) {
            currentIndex++;
            carrusel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

            updateNavigationButtons();
        }
    }

    
    
    // Event listeners para las flechas de navegación
    flechaIzquierda.addEventListener('click', moveLeft);
    flechaDerecha.addEventListener('click', moveRight);

     // Actualiza los botones de navegación al cargar la página
     updateNavigationButtons();
});