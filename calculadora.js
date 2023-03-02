// Datos
let ordenLocal = 90;
let ordenCliente = 45;
let km = 30;
let adicional = 12;

let distanciaLocal = document.getElementById("distancia-inicio").value;

let distanciaCliente =  document.getElementById("distancia-fin").value;

function crearImporte(){
    const pedido = ordenLocal + ordenCliente + distanciaLocal * km + distanciaCliente * km + adicional * distanciaCliente;
    const mostrarResultado = document.getElementById("resultado").innerHTML = pedido;
    return mostrarResultado;
}

let nose = document.getElementById("btn-calcular").addEventListener("click", crearImporte()=>( {
    
 const pedido = ordenLocal + ordenCliente + distanciaLocal * km + distanciaCliente * km + adicional * distanciaCliente;
    const mostrarResultado = document.getElementById("resultado").innerHTML = pedido;
    return mostrarResultado;

}));


