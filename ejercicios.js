function reemplazarPalabras(){
    let reemplazarPalabras = prompt("Ingrese una oracion");

    let palabraClave = prompt("Ingrese una palabra");
    let palabraIngresar = prompt("Ingrese una palabra para reemplazar a la anterior");

    let nuevaOracion = reemplazarPalabras.replaceAll(palabraClave, palabraIngresar);

    document.getElementById('ejercicio1').innerHTML = `Primera oracion: ${reemplazarPalabras}, Palabra a cambiar: ${palabraClave}, Palabra elegida: ${palabraIngresar}, Oracion Final: ${nuevaOracion}`;
}

