"use strict";const input=document.querySelector(".input"),button=document.querySelector(".btn"),feedback=document.querySelector(".feedback"),counter=document.querySelector(".counter"),randomNumber=getRandomNumber(100);let i=0;function getRandomNumber(e){return Math.ceil(Math.random()*e)}function showNumber(){const e=parseInt(input.value);console.log(e),e<randomNumber?feedback.innerHTML="demasiado bajo":e>randomNumber?feedback.innerHTML="demasiado alto":e===randomNumber&&(feedback.innerHTML="¡HAS GANADO CAMPEONA!"),i+=1,counter.innerHTML=i}counter.innerHTML=i,console.log(">",randomNumber),button.addEventListener("click",showNumber);