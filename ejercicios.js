function reemplazarPalabras(){
    let reemplazarPalabras = prompt("Ingrese una oracion");

    let palabraClave = prompt("Ingrese una palabra");
    let palabraIngresar = prompt("Ingrese una palabra para reemplazar a la anterior");

    let nuevaOracion = reemplazarPalabras.replaceAll(palabraClave, palabraIngresar);

    document.getElementById('ejercicio1').innerHTML = `Primera oracion: ${reemplazarPalabras}, Palabra a cambiar: ${palabraClave}, Palabra elegida: ${palabraIngresar}, Oracion Final: ${nuevaOracion}`;
}

function compararDatos(){
    let numeroCompararAString;
    let numeroMismoTipoValor;
    let tipoValor;
    let probarBool;

    if(10 == '10'){
        numeroCompararAString = true;
    }
    else{
        numeroCompararAString = false;
    }
    
    if(10 === '10'){
        numeroMismoTipoValor = true;
    }
    else{
        numeroMismoTipoValor = false;
    }

    tipoValor = typeof(10.6);

    if(true == 1){
        probarBool = true;
    }
    else{
        probarBool = false;
    }

    document.getElementById('ejercicio2').innerHTML = `A: ${numeroCompararAString}; B: ${numeroMismoTipoValor}; C: ${tipoValor}; D: ${probarBool}`;
}

