
document.addEventListener('DOMContentLoaded', function () {
    const carrusel = document.querySelector('.carrusel-destacado');
    const flechaIzquierda = document.querySelector('.flecha-izquierda');
    const flechaDerecha = document.querySelector('.flecha-derecha');
    const cardWidth = document.querySelector('.card').offsetWidth; // Ancho de una tarjeta
    const card = document.querySelector('#card1');
    const card2 = document.querySelector('#card2');
    const card3 = document.querySelector('#card3');
    const card4 = document.querySelector('#card4');
    const card5 = document.querySelector('#card5');
    const card6 = document.querySelector('#card6');
    const card7 = document.querySelector('#card7');
   
    
    let currentIndex = 0; // Índice actual del carrusel



    function updateNavigationButtons() {
        flechaIzquierda.style.display = currentIndex === 0 ? 'none' : 'block';
        flechaDerecha.style.display = currentIndex === carrusel.children.length - 1 ? 'none' : 'block';
    }

    // Función para desplazar el carrusel hacia la izquierda
    function moveLeft() {
        

        if(currentIndex > 0) {
            currentIndex--;
            card.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            card2.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            card3.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            card4.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            card5.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            card6.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            card7.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            updateNavigationButtons();
        }
    }

    // Función para desplazar el carrusel hacia la derecha
    function moveRight() {
        
        if (currentIndex < carrusel.children.length - 1) {
            currentIndex++;
            card.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            card2.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            card3.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            card4.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            card5.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            card6.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            card7.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            updateNavigationButtons();
        }
    }

    
    
    // Event listeners para las flechas de navegación
    flechaIzquierda.addEventListener('click', moveLeft);
    flechaDerecha.addEventListener('click', moveRight);

     // Actualiza los botones de navegación al cargar la página
     updateNavigationButtons();
});