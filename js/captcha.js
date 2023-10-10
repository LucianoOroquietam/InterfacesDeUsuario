"use strict";

document.addEventListener("DOMContentLoaded",loadPage);

function loadPage(){
   const btnCaptcha = document.querySelector("#captcha");
   
   btnCaptcha.addEventListener("click", checkedCaptcha);

   function checkedCaptcha(){

      btnCaptcha.classList.add("captcha-checkout");
      btnCaptcha.removeEventListener("click", checkedCaptcha);
    
   }

}