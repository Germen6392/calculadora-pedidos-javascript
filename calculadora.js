// Datos
const km = 30;

// Variables
const ordenLocal = Number(document.querySelector(".orden-local").textContent);
const ordenCliente = Number(document.querySelector(".orden-cliente").textContent);
const distanciaInicial = document.getElementById("distancia-inicio");
const distanciaFinal = document.getElementById("distancia-fin");
const adicional = document.getElementById("adicional");
const ganancia = document.getElementById("resultado");
const suma = document.getElementById("sumar");
const btncalcular = document.getElementById("enviar-operacion");

//Función que calcula las ganancias
suma.addEventListener("click",(e)=>{
e.preventDefault();
ganancia.value =(ordenLocal + ordenCliente + distanciaInicial.value*km + distanciaFinal.value*km + adicional.value*distanciaFinal.value);
})

