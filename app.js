
let amigos = [];

function agregarAmigo(){
console.log(`Ejecutando la funcion al clicar 'Añadir'`)
//Capturamos el nombre ingresado:
console.log(`Se asigna el nuevo nombre a a una variable en la función.`)
    let nombreNuevo = document.getElementById("amigo").value;
//Validamos que no sea un campo vacío:
console.log("Se comprueba si el nomnbre es inválido.")
    if (nombreNuevo === ""){
        console.log("El nombre es inv álido, se alerta y termina la función.")
        alert("Por favor ingresa un nombre válido.");
        return;
    }
//Si el nombre es válido, lo agregamos al array:
console.log("No hubo nombre inválido, por lo que se lo agrega a la lista.")
    amigos.push(nombreNuevo);
//Ahora ya que agregamos el nombre a la lista, tenemos que limpiar la caja de texto:
console.log("Se limpia la caja de texto para ingresar un nuevo nombre luego.")
    document.getElementById("amigo").value = "";
console.log(`Mostramos el array: ${amigos}`)
console.log('Finalizando al función')
}