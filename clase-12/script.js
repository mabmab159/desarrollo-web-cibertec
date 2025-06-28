console.log("Mensaje de prueba");
//llamadoDeAlerta("Miguel", 28);
//agregarEstiloAImagenes();
document.getElementById("btnCalcular").setAttribute("onclick", "calcularSuma()");
//calcularSuma();

function calcularSuma(){
    let numero1 = parseFloat(document.getElementById("numero1").value); // 123
    let numero2 = parseFloat(document.getElementById("numero2").value); // 2
    document.getElementById("suma").value = numero1+numero2; // 125
    console.log(numero1)
    console.log(numero2)
}

function llamadoDeAlerta(nombre, edad){
    alert(`El nombre es ${nombre} y la edad ${edad}`)
}

function agregarEstiloAImagenes(){
   let cajas = document.getElementsByClassName("caja1");
   let cajas2 = document.getElementById("caja2");
   document.getElementsByTagName
   console.log(cajas)
   console.log(cajas[0])
   console.log(cajas2)
}