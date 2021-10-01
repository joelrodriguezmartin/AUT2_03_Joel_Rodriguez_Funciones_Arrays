/*Modifica la función del ejercicio anterior para que pueda generar un array con los parámetros aleatorios 
del ejercicio anterior o si le falta algún parámetro, utilize por defecto "20 elementos entre 50 y 100" y 
luego ordenarlo. Por ejemplo: "funcion();"  
donde genere un array aleatorio de 20 elementos entre 50 y 100.*/

function actividad3(){
    alert("Hacemos prueba pasando 2 parametros: ");
    let output1 = arrayAleatorio(10, 100);//Llamamos a la funcion con solo 2 parámetros
    alert("El array aleatorio (2 parametros) es: " + output1);
    let output2 = arrayAleatorio(10, 100, 200);
    alert("Hacemos prueba pasando 3 parametros: ");
    alert("El array aleatorio (3 parametros) es: " + output2);
}

function generateArray(num, min, max){//Como vamos a generar el array en 2 sitios dependiendo del input lo externalizamos a una funcion
    let randomArray = [];//Creamos el array
    for (let i = 0; i <= num; i++){
      randomArray.push(Math.floor(Math.random() * (max - min + 1)) + min);//Generamos numero aleatorio entre min y max y lo introducimos en el array
    }
    return randomArray.sort();//Retornamos el array TODO: Ordenar el array
}

function arrayAleatorio(numElementos, minVal, maxVal){
    if (arguments.length < 3){//Comprobamos el numero de parámetros, si es menor que 3 utilizamos los valores del enunciado
        return generateArray(20, 50, 100);
    }
    else{
        return generateArray(numElementos, minVal, maxVal);
    }  
}
