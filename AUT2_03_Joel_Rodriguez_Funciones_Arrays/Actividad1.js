/*Realizar una función en JS que dado un DNI (comprobar que es un número entre 0 y 99999999), 
devuelva la letra asociado al mismo. Esta letra se calcula como el módulo (resto) de la división del número del DNI entre 23, 
y a partir del resto se escoge una de las siguientes letras según la posición: TRWAGMYFPDXBNJZSQVHLCKET. 
Por ejemplo, para el DNI 12345678, al dividir entre 23 se obtiene como resto 14, por lo que le corresponde la letra 'Z', 
siendo el DNI correcto 12345678Z.*/

function actividad1(){
    let input = window.prompt("Introduce tu DNI sin letra: "); //Recibimos los datos
    output = calculaDNI(input); //Creamos el output llamando a la funcion
    alert(output==0?"DNI inválido":"Tu DNI con letra es: "+output); //Imprimimos o notificamos error dependiendo del output
}

function calculaDNI(input){
    let numerosDni = parseInt(input); //Convertimos el input en numero;
    if (isNaN(numerosDni) || numerosDni > 99999999 || numerosDni <= 0){//Si no es valido retorna 0 para control de errores
        return 0;
    }
    else{
        arrayLetras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", //Creamos un array con las letras
        "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];
        return(numerosDni + arrayLetras[numerosDni%23]); //Retornamos el dni con letra
    }
    
}