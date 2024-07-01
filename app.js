let numeroSecreto = 5;
let numeroUsuario;
let intentos=0;  
let palabraIntento= "intento"; // si es 1 intento. Si es mas de 1, la variable a cambia. Ver el else.

while(numeroUsuario != numeroSecreto) {
    
    numeroUsuario = prompt("Pon un numero por favor:");


    /* alert("Hola mundo");  pop ups */
    console.log(numeroUsuario);
    intentos = intentos+1 

    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste el numero: ${numeroSecreto}. Lo hiciste en ${intentos} ${palabraIntento}.` ); // uso de comilla invertida
    }
    else {
        if (numeroUsuario > numeroSecreto) {
            alert("El numero secreto es menor");
        } else{
            alert("El numero secreto es mayor");
        }
        
        palabraIntento = "intentos"; // si hay equivocacion, ahora son intentoS, en plural.

        // alert("Numero incorrecto");
    }

}