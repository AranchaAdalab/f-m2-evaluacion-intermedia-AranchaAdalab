"use strict";const input=document.querySelector(".input"),button=document.querySelector(".btn"),feedback=document.querySelector(".feedback"),counter=document.querySelector(".counter"),popup=document.querySelector(".popup"),reset=document.querySelector(".reset"),span='Escribe un número y dale a <span class="attempt">Prueba</span>';let randomNumber=getRandomNumber(100),i=0;function getRandomNumber(e){return Math.ceil(Math.random()*e)}function showNumber(){const e=parseInt(input.value);""===input.value?(popup.classList.remove("hidden"),i-=1,counter.innerHTML=i):popup.classList.add("hidden"),e<randomNumber&&e>0?feedback.innerHTML="Demasiado bajo":e<randomNumber&&e<0?feedback.innerHTML="Los números negativos no molan":e>randomNumber&&e<100?feedback.innerHTML="Demasiado alto":e>randomNumber&&e>100?feedback.innerHTML="Más de dos cifras no es buena idea":e===randomNumber&&(feedback.innerHTML="¡HAS GANADO!"),i+=1,counter.innerHTML=i}function myFunction(e){13===e.keyCode&&showNumber()}function resetAll(){input.value="",i=0,counter.innerHTML=i,feedback.innerHTML=span,randomNumber=getRandomNumber(100),console.log(randomNumber)}counter.innerHTML=i,button.addEventListener("click",showNumber),document.addEventListener("keydown",myFunction),reset.addEventListener("click",resetAll),console.log(`-- ${randomNumber}`);