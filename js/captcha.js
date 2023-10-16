"use strict";

document.addEventListener("DOMContentLoaded",loadPage);

function loadPage(){
   const btnCaptcha = document.querySelector("#captcha");
   const containerRegistrarse = document.querySelectorAll("#registro-exitoso");
   const buttonActive = document.querySelectorAll("#button");
   
   btnCaptcha.addEventListener("click", checkedCaptcha);
   

   
   function checkedCaptcha(){

      btnCaptcha.classList.add("captcha-checkout");
      btnCaptcha.removeEventListener("click", checkedCaptcha);


      buttonActive.forEach((btn) => {
         btn.classList.add("active");
         btn.addEventListener("click", function () {
             containerRegistrarse.forEach((contenedor) => {
                 contenedor.classList.add("registrado");
                 setTimeout(function () {
                  window.location.href = 'index.html';
              }, 2000);
                
             });
         });
     });
   
   }

   

}