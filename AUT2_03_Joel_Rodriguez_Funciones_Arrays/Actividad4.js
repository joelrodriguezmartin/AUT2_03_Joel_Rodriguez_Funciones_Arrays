/*Recorrer un array aleatorio generado con la función del ejercicio 1 (15 elementos entre -10 y 20) y para cada elemento x, g
estionar un nuevo array de la siguiente forma:

    x <= -5: Eliminar el primer elemento del array
    -5 < x <= 0: Eliminar el último elemento del array
    0 < x <=  10: Añadir x al principio del array
    10 < x <=  10: Añadir x al final del array
    Mostrar un mensaje de texto para cada número indicando el valor de x, la operación realizada (eliminar o añadir, al principio o al final), 
    el número añadido/eliminado y el tamaño del array tras realizar la operación
*/


function actividad4(){
    randArray = generateArrays(15, -10, 20);//Generamos array con la funcion del ejercicio 3 y valores 15, -10, 20;
    randArray = recorreArray(randArray);
    alert("El array gestionado es: " + randArray);
}

function recorreArray(randArray) {
    randArray.forEach(x => {
        if (x <= -5){
            aux = randArray.shift();//Eliminamos primer elemento 
            console.log("x = " + x + " eliminado al principio " + aux + " tamaño de array = " + randArray.length);
        }
        else if (-5 < x && x <= 0){
            aux = randArray.pop();//Eliminamos el ultimo elemento
            console.log("x = " + x + " eliminado al final " + aux + " tamaño de array = " + randArray.length);
        }
        else if(0 < x && x <= 10){
            randArray.unshift(x);//Añadimos x al principio
            console.log("x = " + x + " añadido al principio " + x + " tamaño de array = " + randArray.length);
        }
        else if(10 < x && x <= 20){
            randArray.push(x);//Añadimos x al final
            console.log("x = " + x + " añadido al final " + x + " tamaño de array = " + randArray.length);
        }
    });
    return randArray;
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
