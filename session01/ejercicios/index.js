// Variables
//let
let edadUsuario = 25;
// consle.log("Let",edadUsuario);
edadUsuario = 26;
// console.log("Let",edadUsuario);
// const
const nombreUsuario = "Lina";
// console.log("Nombre: ",nombreUsuario);
// Condicionales
const edadMedia = 18;
const usuario = {'nombre': 'Lina', 'edad': 15};
/* if (usuario.nombre  === 'Lina'){
    console.log('Puede entrar a la discoteca');
}
 */

const numero = 2.0;
const numeroStr = 'Version'+'2.0';
// console.log(numero === numeroStr);
const bandera = true;
const pais = 'Colombia';
const comida = 'bandeja paisa';
// Operador ternario
// bandera && pais === 'Colombia' ? console.log('Puede entrar') : console.log('No puede entrar');
const nombre = null;
// nombre ?? console.log(nombre);
const usuario1 = nombre && 'Defecto';
// console.log('Usuario1',usuario1);

// Ciclos
// for
let totalPares = 0;
let totalImpares = 0;
const inicio = 1;
const fin = 20;

for (let i = inicio; i <= fin; i++) {
    if (i % 2 === 0) {
        totalPares++;
        //console.log(` El numero ${i} es par`);

    } else {
        totalImpares++;
        //console.log(` El numero ${i} es impar`);
    }
}
// console.log('Total pares',totalPares);
// console.log('Total impares',totalImpares);

// while
const limite = 100;
let suma = 0;
let numero1 = 1;
while (suma < limite) {
    suma += numero1;
    //console.log(`Numero ${numero1}, suma acumulada: ${suma}`);
    numero1++;
}
//console.log(`la suma supero el limite de ${limite}`);
//console.log(`El ultimo numero sumando es ${numero1 - 1}`);

// funciones
const calcularAreaCirculo = (radio) => {
    const area = Math.PI * Math.pow(radio ** 2);
    return area;
}
const radio = 5;
const respuesta = calcularAreaCirculo(radio);
// console.log(respuesta);
const sumaNumeros = (a, b) => a + b;
const respuestaSuma = sumaNumeros(5, 10);
// console.log(respuestaSuma);

// Arrays
let tareas = ["Lavar la ropa", "Hacer la compra", "Estudiar JS"];
// console.log('1. ',tareas);
tareas.push("Llamar a mi mama");
// console.log('2. ',tareas);
tareas.unshift("Comer");
// console.log('3. ',tareas);
tareas.pop();
// console.log('4. ',tareas);
tareas.shift();
// console.log('5. ',tareas);
tareas.splice(2,1);
//console.log('6. ',tareas);
tareas.splice(1,1,"Hacer ejercicio");

const indice = tareas.indexOf('Hacer la compra');
if (indice !== -1) {
    tareas.splice(indice, 1);
}
// console.log('7. ',tareas);

tareas.map((tarea) => {
    // console.log(tarea)
});
