function calcularEdad(){
    let nombre = prompt("Ingrese su nombre")
    // let dia = prompt("Ingrese el día de la fecha de nacimiento")
    // let mes = prompt("Ingrese el mes de la fecha de nacimiento")
    // let anio = prompt("Ingrese el año de la fecha de nacimiento")

    let edad = 

    document.getElementById('ejercicio1').innerHTML = `Hola ${nombre}! Tienes ${edad} años`
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

function reemplazarPalabras(){
    let reemplazarPalabras = prompt("Ingrese una oracion");
    let palabraClave = prompt("Ingrese una palabra");
    let palabraIngresar = prompt("Ingrese una palabra para reemplazar a la anterior");

    let nuevaOracion = reemplazarPalabras.replaceAll(palabraClave, palabraIngresar);

    document.getElementById('ejercicio1').innerHTML = `Primera oracion: ${reemplazarPalabras}, Palabra a cambiar: ${palabraClave}, Palabra elegida: ${palabraIngresar}, Oracion Final: ${nuevaOracion}`;
}


