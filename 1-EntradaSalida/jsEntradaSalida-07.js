/* Martin Gilberto
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroPrimario;
	var numeroSecundario;
	var res;
	var mensaje;

	numeroPrimario = document.getElementById("txtIdNumeroUno").value;
	numeroSecundario = document.getElementById("txtIdNumeroDos").value;

	numeroPrimario = parseInt(numeroPrimario);
	numeroSecundario = parseInt(numeroSecundario);

	res = numeroPrimario + numeroSecundario
	mensaje = "La suma es: "
	alert(mensaje + res);
}

function restar()
{
	var numeroPrimario;
	var numeroSecundario;
	var res;
	var mensaje;

	numeroPrimario = document.getElementById("txtIdNumeroUno").value;
	numeroSecundario = document.getElementById("txtIdNumeroDos").value;

	numeroPrimario = parseInt(numeroPrimario);
	numeroSecundario = parseInt(numeroSecundario);

	res = numeroPrimario + numeroSecundario
	mensaje = "La resta es: "
	alert(mensaje + res);

}
function multiplicar()
{ 
	var numeroPrimario;
	var numeroSecundario;
	var res;
	var mensaje;

	numeroPrimario = document.getElementById("txtIdNumeroUno").value;
	numeroSecundario = document.getElementById("txtIdNumeroDos").value;

	numeroPrimario = parseInt(numeroPrimario);
	numeroSecundario = parseInt(numeroSecundario);

	res = numeroPrimario + numeroSecundario
	mensaje = "La multiplicacion es: "
	alert(mensaje + res);
}

function dividir()
{
	var numeroPrimario;
	var numeroSecundario;
	var res;
	var mensaje;

	numeroPrimario = document.getElementById("txtIdNumeroUno").value;
	numeroSecundario = document.getElementById("txtIdNumeroDos").value;

	numeroPrimario = parseInt(numeroPrimario);
	numeroSecundario = parseInt(numeroSecundario);

	res = numeroPrimario + numeroSecundario
	mensaje = "La divicion es: "
	alert(mensaje + res);
}
