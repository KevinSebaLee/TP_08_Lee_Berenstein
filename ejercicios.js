function calcularEdad() {
  let nombre = prompt("Ingrese su nombre");
  let dia = prompt("Ingrese el día de la fecha de nacimiento");
  let mes = prompt("Ingrese el mes de la fecha de nacimiento");
  let anio = prompt("Ingrese el año de la fecha de nacimiento");

  let edad = Math.abs(
    new Date().getFullYear - new Date(anio, mes, dia).getFullYear()
  );

  document.getElementById(
    "ejercicio1"
  ).innerHTML = `Hola ${nombre}! Tienes ${edad} años`;
}

function tirandoFruta() {
  const frutas = [
    "pera",
    "banana",
    "manzana",
    "sandia",
    "melon",
    "tomate",
    "arandanos",
    "frutilla",
    "cereza",
    "naranja",
  ];

  let frutaPedida = prompt("Ingrese una fruta");
  let encontro;
  let sumatoria = 0;

  for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
  }

  do {
    encontro = frutaPedida.toLocaleLowerCase() == frutas[sumatoria];

    if (frutaPedida.toLocaleLowerCase() == frutas[sumatoria]) {
      encontro = true;
    } else {
      encontro = false;
    }

    sumatoria++;
  } while (!encontro);

  if (encontro) {
    document.getElementById(
      "ejercicio2"
    ).innerHTML = `Si tenemos ${frutaPedida}!`;
  } else {
    document.getElementById(
      "ejercicio2"
    ).innerHTML = `No tenemos ${frutaPedida}..`;
  }
}

function YoObjeto() {
  const Ciudad = {
    Nombre: "Buenos Aires",
    FechaFundacion: 1810,
    poblacion: "10 millones",
    Extension: "203km",
  };

  for (const propiedad in Ciudad) {
    console.log(`${propiedad}: ${Ciudad[propiedad]}`);
  }
}

function TrianguloAsterisco() {
  let string = "";
  let string1 = "";

  for (let i = 0; i < 6; i++) {
    if (i > 0) {
      string += "*".repeat(i) + "<br>";
    }

    const asteriscos = "*".repeat(i + (i + 1));
    const barras = "-".repeat(6 - i - 1);
    string1 += barras + asteriscos + barras + "<br>";
  }

  document.getElementById("ejercicio4").innerHTML = string;
}

function NombresConA() {
  let nombres = prompt("Ingrese nombres separados por coma");
  let listNombres = nombres.split(", ");
  let nombresConA = listNombres.filter((nombre) => nombre.toLocaleLowerCase().startsWith("a"))

  document.getElementById("ejercicio5").innerHTML = `Nombres con A: ${nombresConA}`;
}

function CortarTexto(){
    let cadenaTexto = prompt("Ingrese una cadena de texto");
    let numero = prompt("Ingrese un numero");

    let cadenaNueva = cadenaTexto.substring(0, numero);;

    document.getElementById("ejercicio6").innerHTML = `La letra segun el numero proporcionado: ${cadenaNueva}`;
}

function StringConSeparador(){
    let elementos = prompt("Ingrese nombres separados por -");
    let listaElementos = elementos.split(" - ");

    document.getElementById("ejercicio7").innerHTML = `${listaElementos}`;
}

function CalculadoraRecaduacion(){
    let pedidos = prompt("Ingresa los pedidos en el formato 'nombre:total', separados por coma:");

    let totalPrecioPedidos = pedidos.split(", ").map(pedido => {
        let [nombre, total] = pedido.split(":");
        return { nombre, total: parseFloat(total) };
    });

    let total = 0;

    totalPrecioPedidos.forEach(pedido => {
        total += pedido.total;
    })

    document.getElementById("ejercicio7").innerHTML = `${total}`;
}

CalculadoraRecaduacion();

function compararDatos() {
  let numeroCompararAString;
  let numeroMismoTipoValor;
  let tipoValor;
  let probarBool;

  numeroCompararAString = 10 == "10";
  numeroMismoTipoValor = 10 === "10";
  tipoValor = typeof 10.6;
  probarBool = true == 1;

  document.getElementById(
    "ejercicio8"
  ).innerHTML = `A: ${numeroCompararAString}; B: ${numeroMismoTipoValor}; C: ${tipoValor}; D: ${probarBool}`;
}

function reemplazarPalabras() {
  let reemplazarPalabras = prompt("Ingrese una oracion");
  let palabraClave = prompt("Ingrese una palabra");
  let palabraIngresar = prompt(
    "Ingrese una palabra para reemplazar a la anterior"
  );

  let nuevaOracion = reemplazarPalabras.replaceAll(
    palabraClave,
    palabraIngresar
  );

  document.getElementById(
    "ejercicio10"
  ).innerHTML = `Primera oracion: ${reemplazarPalabras}, Palabra a cambiar: ${palabraClave}, Palabra elegida: ${palabraIngresar}, Oracion Final: ${nuevaOracion}`;
}
