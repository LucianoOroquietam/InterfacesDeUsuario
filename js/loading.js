window.addEventListener("load", function () {
    // Simular una carga de 5 segundos
    const loadingContainer = document.querySelector(".loading-container");
    //Mostrar contenedor de carga
    loadingContainer.style.display = "block";
    
    setTimeout(function () {
        // Ocultar el contenedor de carga       
        loadingContainer.style.display = "none";

    }, 5000);
});


