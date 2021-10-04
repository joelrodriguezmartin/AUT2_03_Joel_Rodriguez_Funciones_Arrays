/*Crear una función que devuelva el valor máximo y mínimo del array, e indique el índice de estos valores
 (si el valor se repite, informar sólo sobre la primera vez que aparezca). 
 Probar con un array aleatorio de 20 números entre -100 y 100.*/

function actividad5(){
    let array = generateArrays(20, -100, 100);
    devolverValores(array);
}

function devolverValores(arrayRand){
    let min = arrayRand[0];
    let max = arrayRand[0];
    let auxMin = 0;
    let auxMax = 0;
    for (let i = 0; i < arrayRand.length; i++){
        if (min < arrayRand[i]){
            min = arrayRand[i];
            auxMin = i;
        }
        if (max > arrayRand[i]){
            max = arrayRand[i];
            auxMax = i;
        }
    }
    alert("El maximo es: " + max + " en la posicion: " + auxMax + " y el minimo es: " + min + " en la posicion " + auxMin);
}

function generateArrays(num, min, max) {//Como vamos a generar el array en 2 sitios dependiendo del input lo externalizamos a una funcion
    let randomArray = [];//Creamos el array
    for (let i = 0; i <= num; i++) {
        randomArray.push(Math.floor(Math.random() * (max - min + 1)) + min);//Generamos numero aleatorio entre min y max y lo introducimos en el array
    }
    return randomArray;
    /*return randomArray.sort(function(a, b) {
        return a - b;
       });//Retornamos el array ordenado*/
}