alert("Bienvenido")
let nombre = "Miguel";
alert("Hola "+nombre);
alert(`Hola ${nombre}`);
let nombre2 = prompt("Ingresa tu nombre: ")
alert(`Hola ${nombre2}`);

let confirmacionUsuario = confirm("Estas de acuerdo con ingresar a nuestra web");
if(confirmacionUsuario){
    alert("Bienvenido")
} else {
    alert("Vuelve a visitarnos")
}


let numero1 = 1;
let numero2 = 2;
let numero3 = 3;

if(numero2>numero1 || numero3>numero2){
    alert("El numero2 es mayor")
} else {
    alert("El numero 2 no es mayor")
}


let ancho = screen.width;
let alto = screen.height;

alert(`El tamaño de la pantalla del usuario es: ${ancho} px y ${alto} px.`)

