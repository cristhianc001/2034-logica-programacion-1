// desafios https://github.com/alura-es-cursos/desafios-logica-programacion/blob/main/desafio-3

let numeroSecreto = Math.floor(Math.random()*10)+1;
let numeroUsuario;
let intentos=0;  
let palabraIntento= "intento"; // si es 1 intento. Si es mas de 1, la variable a cambia. Ver el else.
let maximosIntentos = 3;

while(numeroUsuario != numeroSecreto) {
    
    numeroUsuario = parseInt(prompt("Pon un numero por favor:"));


    /* alert("Hola mundo");  pop ups */
    console.log(numeroUsuario);
    intentos = intentos+1 // intentos++

    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste el numero: ${numeroSecreto}. Lo hiciste en ${intentos} ${palabraIntento}.` ); // uso de comilla invertida
                                                                                                    // operador terciario: ${intentos==1 ? "vez": "veces"}, reemplaza palabraIntento
    }
    else {
        if (numeroUsuario > numeroSecreto) {
            alert("El numero secreto es menor");
        } else{
            alert("El numero secreto es mayor");
        }
        
        palabraIntento = "intentos"; // si hay equivocacion, ahora son la variable se cambia a "intentoS", en plural.

        if (intentos >= maximosIntentos) {
            alert(`Numero maximo de intentos: ${maximosIntentos}`);
            break;
        }

        // alert("Numero incorrecto");
    }

}