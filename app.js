// variables
let numeroSecreto = 6;
let numeroUsuario = prompt("Pon un numero por favor:");


/* alert("Hola mundo");  pop ups */
console.log(numeroUsuario);

if (numeroUsuario == numeroSecreto) {
    alert(`Acertaste el numero: ${numeroSecreto}` ); // uso de comilla invertida
}

else {
    alert("Numero incorrecto");
}
