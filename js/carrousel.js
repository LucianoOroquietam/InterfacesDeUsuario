document.addEventListener("DOMContentLoaded", function () {
  const flechaIzquierda = document.querySelector(".flecha-izquierda");
  const flechaDerecha = document.querySelector(".flecha-derecha");
  const cardWidth = document.querySelector("#card").offsetWidth; // Ancho de una tarjeta

  const keyframeIzquierda = [
    { transform: `translateX(${cardWidth}px) skewX(0deg)` },
    { transform: `translateX(${cardWidth}px) skewX(-5deg)` },
    { transform: `translateX(${cardWidth}px) skewX(0deg)` }
  ];
  
  const keyframeDerecha = [
    { transform: `translateX(-${cardWidth}px) skewX(0deg)` },
    { transform: `translateX(-${cardWidth}px) skewX(-5deg)` },
    { transform: `translateX(-${cardWidth}px) skewX(0deg)` }
  ];
  

  const cards = document.querySelectorAll("#card");
  const arrayCarrusel = Array.from(cards);
  let currentIndex = 0; // Índice actual del carrusel

  function updateNavigationButtons() {
    flechaIzquierda.style.display = currentIndex === 0 ? "none" : "block";
    flechaDerecha.style.display =
      currentIndex === arrayCarrusel.length - 4 ? "none" : "block";
  }

  function moveCarrusel(direction) {
    if (direction === "left" && currentIndex > 0) {
      currentIndex--;
    } else if (direction === "right" && currentIndex < arrayCarrusel.length - 4) {
      currentIndex++;
    }

    arrayCarrusel.forEach((card, index) => {
      card.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
      const keyframe = direction === 'left' ? keyframeIzquierda : keyframeDerecha;
      card.animate(keyframe, 1000);
    });


    updateNavigationButtons();
  }

  flechaIzquierda.addEventListener("click", () => moveCarrusel("left"));
  flechaDerecha.addEventListener("click", () => moveCarrusel("right"));

  // Actualiza los botones de navegación al cargar la página
  updateNavigationButtons();
});
