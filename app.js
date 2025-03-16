
let amigos = [];

function agregarAmigo(){
    let nombreNuevo = document.getElementById("amigo").value;
    if (nombreNuevo === ""){
        console.log("El nombre es inv álido, se alerta y termina la función.")
        alert("Por favor ingresa un nombre válido.");
        return;
    }
    amigos.push(nombreNuevo);
    document.getElementById("amigo").value = "";
//console.log(`Mostramos el array: ${amigos}`)
actualizarLista();
}

 function actualizarLista(){
    let  listaDeAmigos = document.getElementById("listaAmigos");
    listaDeAmigos.innerHTML = "";
    for (let i=0;i<amigos.length; i++){
        let elementoNuevo = document.createElement("li");
        elementoNuevo.textContent =  amigos[i];
        listaDeAmigos.appendChild(elementoNuevo);
    }
 }

 function sortearAmigo(){
    if (amigos.length===0){
        alert("No has agregado ningun amigo aún.")
        return;
    }
    let indiceSorteado = Math.floor(Math.random()*amigos.length);
    let nombreSorteado = amigos[indiceSorteado];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto es: ${nombreSorteado}<li>`;
 }