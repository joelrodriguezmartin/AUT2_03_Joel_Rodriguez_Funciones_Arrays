//Crear una función que genere un array aleatorio, usando 3 parámetros: número de elementos , valor mínimo del elemento, valor máximo (para el random).

function actividad2(){
    alert("Valores: Numero elementos 10, valor minimo 100, valor maximo 200");
    let output = arrayAleatorio(10, 100, 200);//Llamamos con los valores 10, 100 y 200
    alert("El array aleatorio es: " + output);
}

function arrayAleatorio(num, min, max){
    let randomArray = [];//Creamos el array
    for (let i = 0; i <= num; i++){
        randomArray.push(Math.floor(Math.random() * (max - min + 1)) + min);//Generamos numero aleatorio entre min y max y lo introducimos en el array
    }
    return randomArray;//Retornamos el array
}