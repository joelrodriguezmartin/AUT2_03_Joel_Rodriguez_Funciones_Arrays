/*Escribir una función que busque la cadena "arriba"
 en un texto.La función deberá informar si encuentra o no 
 esta cadena en el texto y, si la encuentra, nos deberá 
 mostrar el texto reemplazando "arriba" por "abajo".*/

function actividad7() {
    let input = window.prompt("Introduce una cadena de caracteres, si tiene \"arriba\" se sustituira por \"abajo\" ");
    sustituirStrings(input);
}

function sustituirStrings(string) {
    //Lo hacemos en un bucle y usando replace en lugar de replaceAll para poder comunicar cada ocurrencia de el substring arriba
    while (string.includes("arriba")) {//se utilizará el string mientras incluya la cadena arriba
        console.log("\"arriba\" encontrado, se sustituirá: ");
        string = string.replace("arriba", "abajo")//sustituimos arriba por abajo
        console.log(string);
    }

}