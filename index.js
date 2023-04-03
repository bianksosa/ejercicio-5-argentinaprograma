/*1. Crea un array que contenga el nombre de cinco colores escritos como strings*/

const colores= ["rojo", "azul", "verde", "violeta", "rosa"];
console.log(colores);

/*2.Guarda en una variable el tercer elemento del array del ejercicio anterior.*/ 
let variable= colores[2];
console.log (variable);

/*3.Accede desde un console.log() a la posición 0 del string de la posición 0 del array del
ejercicio 1. */
console.log (colores[0]);

/*4.Se pide realizar un script que genere un número aleatorio entre 1 y 99. Investigue la función Math.random(). */

function getRandomInt(max) {
    return Math.floor(Math.random() * max) }
  console.log(getRandomInt(99));

/*5.Rellena un array con los números del 1 al 10. Muéstralo por la consola.*/
const numeros =[1,2,3,4,5,6,7,8,9,10];
console.log(numeros);

/*6 Rellena un array con números aleatorios (10 por ejemplo). Muéstralo por la consola.*/

const numaleatorios= [getRandomInt(99),getRandomInt(99),getRandomInt(99),getRandomInt(99),getRandomInt(99),getRandomInt(99),getRandomInt(99),
  getRandomInt(99),getRandomInt(99),getRandomInt(99)]
console.log (numaleatorios);

/*7.Del array anterior, créale una copia (que no sea el mismo en sí). Mostrarlos por la consola.*/
const arraycopia = numaleatorios;
console.log (arraycopia);

/* 8. Realiza un script que pida cadenas de texto hasta que se ingrese la palabra “cancelar”.
Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión
medio. Realizar la misma actividad, pero ahora almacenando los valores en un array y
luego recorriendolo para mostrar el resultado deseado del ejercicio*/

// function cadenadetexto() {
//   let ingreso= prompt("ingrese un texto");
//   let palabrafinal="";
//   while (ingreso.toLowerCase()!="cancelar") {
//     palabrafinal = palabrafinal+" "+ingreso;
//     ingreso= prompt("ingrese un texto");
//   }
//   let resultado= palabrafinal.trim().replace (/ /g,"-");
//  console.log(resultado);
  
// }
// cadenadetexto();
// function cadenadetextoarray() {
//   let ingreso=prompt("ingrese un texto");
//   const palabrafinal=[];
//   while (ingreso.toLowerCase()!="cancelar") {
//     palabrafinal.push(ingreso);
//     ingreso= prompt("ingrese un texto");
//   }
//   palabrafinal.forEach(element=> {
//     console.log (element)
//   });
// }
// cadenadetextoarray();

/*9*/ 
function mostrarresultado(){
  let dolares = document.getElementById("dolares").value;
  document.getElementById("inputpesos").value=dolares*300;
}
 
/*10 */
function mostrarresultado2(){
  let pesos = document.getElementById("pesos").value;
  document.getElementById("inputdolares").value= pesos/300;
}

/*11 */
function mostrargrados() {
let grados= document.getElementById("inputgradoc").value;
document.getElementById("inputgradof").value= grados*9/5+32;
    
  }
/*13 */
let numerosecreto= 1;
let intentos= 2;

let boton= document.getElementById("botonenviarnum");
boton.addEventListener("click",function(e) {
e.preventDefault();
let inputusuario= document.getElementById("inputusuario").value;
if (intentos>=0) {
  if (inputusuario>=0 && inputusuario<=5) {
    if (inputusuario==numerosecreto) {document.getElementById("respuesta").innerText="Ganaste";
    intentos=0; 
      
    }else{document.getElementById("respuesta").innerText="Fallaste, te quedan " + intentos + " intentos";intentos=intentos-1;}
    
  }else{document.getElementById("respuesta").innerText="Debe ser un numero del 0 al 5";}
  
}else{document.getElementById("respuesta").innerText="No te quedan más intentos, recargue la página";}
  document.getElementById("inputusuario").value="";
})
/*14 */
let botonnombre= document.getElementById("agregarnombre");
botonnombre.addEventListener("click", function () {
  let input= document.getElementById("inputlistadesordenada");
  if (input.value.length>0) {
    let ul= document.getElementById("listadesordenadanombres");
    let li= document.createElement("li");
    li.innerText=input.value;
    ul.appendChild(li);
    document.getElementById("inputlistadesordenada").value="";
    
  }
  
})

 



  



  
  
