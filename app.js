/*let NumeroSecreto = generarNumSecreto();
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10 ;

console.log(NumeroSecreto)
function AsignarTextoElemento (elemento,texto){
    let ElementoHTML = document.querySelector(elemento);
    ElementoHTML.innerHTML= texto; 
}
function ClickIntentoU() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value); 
    
    if(numeroUsuario === NumeroSecreto){
      AsignarTextoElemento('p',`Acertaste el numero en : ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
      document.getElementById('reiniciar').removeAttribute('disabled');// Activa el boton nuevo juego cuando se acierta
    }else {
// para cuando el usuario no ha acertado 
      if(numeroUsuario > NumeroSecreto){
        AsignarTextoElemento('p','El numero secreto es menor');
      }else{ 
        AsignarTextoElemento('p','El numero secreto es mayor');
      }
      intentos++;
      LimpiarInput();
    }
    return;
}
function LimpiarInput(){
  document.querySelector('#valorUsuario').value = ''; // (value='')significa que el valor esta vacio para que lo ingresen por el input
  
}

 function generarNumSecreto() {
   let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
//  si el numero generado esta incluido en la lista 
// si ya sorteamos todos los numeros
if (listaNumerosSorteados.length == numeroMaximo){
  AsignarTextoElemento('p','Ya se sortearon todos los nunmeros posibles ')
}else{

}
if(listaNumerosSorteados.includes(numeroGenerado)){
return generarNumSecreto();
}else{
  listaNumerosSorteados.push(numeroGenerado);
  return numeroGenerado;
}
    
 }
function condicionesInicio(){
  AsignarTextoElemento('h1', 'Juego de numero secreto!');
 AsignarTextoElemento('p',`Digita un nuemro de 1 a ${numeroMaximo}`);
 NumeroSecreto = generarNumSecreto();
 intentos = 1;
}
 function ClickNewGame(){
// limpiar el input 
LimpiarInput();
// indicar mensaje de inicio 
// generar el numero aleatorio 
// inicializarl el numero de intentos 
condicionesInicio();
// deshabilitar el boton de Nuevo juego 
document.getElementById('reiniciar').setAttribute('disabled', 'true');

 }


condicionesInicio();



// colocarlo en el cuaderno : Todos los arreglos inician con posicion 0 
// Para saber el tamaño de la lista se coloca console.log(nombre_ de_la_lista.length);, ejemplo console.log(numeroSorteado.length);
// Para agregar un elemento al final del array, puedes usar el método (push).
// Para eliminar el último elemento, puedes usar el método (pop)*/

let listaGenerica = [];