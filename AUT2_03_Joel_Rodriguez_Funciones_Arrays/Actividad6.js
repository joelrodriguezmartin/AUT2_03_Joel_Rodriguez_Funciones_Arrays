/*Crear un array de 50 números aleatorios 
enteros aleatorios entre 10 y 20. Para cada elemento, informar si es la primera vez que aparece, o si se trata de 
un elemento repetido y nos indique cuántas veces había aparecido con anterioridad.*/
function actividad6() {
    let array = generateArrays(50, 10, 20);
    numeroElementos(array);
}

function numeroElementos(array) {
    let dictBD = {};//Creamos un diccionario
    console.log("El array es " + array);
    array.forEach(element => {
        if (isNaN(dictBD[element])) {//Esto ocurrirá cuando el número no este en el diccionario
            dictBD[element] = 1;//Creamos la key con valor 1
            console.log("Es la primera vez que aparece el numero " + element);
        }
        else {
            dictBD[element] += 1;//Le sumamos 1 al valor 
            console.log("El numero " + element + " ha aparecido " + dictBD[element] + " veces")
        }
    });
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