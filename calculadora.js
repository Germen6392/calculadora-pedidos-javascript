// Datos
const ordenLocal = 90;
const ordenCliente = 45;
const km = 30;
const adicional = 12;

// Variables
const distanciaInicial = document.getElementById("distancia-inicio");
const distanciaFinal = document.getElementById("distancia-fin");
const ganancia = document.getElementById("resultado");
const suma = document.getElementById("sumar");
const btncalcular = document.getElementById("enviar-operacion");

btncalcular.addEventListener("click",(e)=> {
console.log(e);
});

suma.addEventListener("click",(e)=>{
e.preventDefault();
ganancia.value =(ordenLocal + ordenCliente + distanciaInicial.value*km + distanciaFinal.value*km + adicional*distanciaFinal.value);
})

