
document.addEventListener('DOMContentLoaded', function () {
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
    const card8 = document.querySelector('#card8');
    const card9 = document.querySelector('#card9');
    const card10 = document.querySelector('#card10');

    let arrayCarrusel = [];
    arrayCarrusel.push(card);
    arrayCarrusel.push(card2);
    arrayCarrusel.push(card3);
    arrayCarrusel.push(card4);
    arrayCarrusel.push(card5);
    arrayCarrusel.push(card6);
    arrayCarrusel.push(card7);
    arrayCarrusel.push(card8);
    arrayCarrusel.push(card9);
    arrayCarrusel.push(card10);

    let currentIndex = 0; // Índice actual del carrusel

    function updateNavigationButtons() {
        flechaIzquierda.style.display = currentIndex === 0 ? 'none' : 'block';
        flechaDerecha.style.display = currentIndex === arrayCarrusel.length-4 ? 'none' : 'block';
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
            card8.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            card9.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            card10.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            updateNavigationButtons();
        }
    }

    // Función para desplazar el carrusel hacia la derecha
    function moveRight() {
        
        if (currentIndex  < arrayCarrusel.length-4) {
            currentIndex++;
            card.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            card2.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            card3.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            card4.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            card5.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            card6.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            card7.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            card8.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            card9.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            card10.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            updateNavigationButtons();
        }   
    }

    flechaIzquierda.addEventListener('click', moveLeft);
    flechaDerecha.addEventListener('click', moveRight);

     // Actualiza los botones de navegación al cargar la página
     updateNavigationButtons();
});


