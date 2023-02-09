/* Martin Gilberto
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroPrimario;
	var numeroSecundario;
	var res;
	

	numeroPrimario = document.getElementById("txtIdNumeroUno").value;
	numeroSecundario = document.getElementById("txtIdNumeroDos").value;

	numeroPrimario = parseInt(numeroPrimario);
	numeroSecundario = parseInt(numeroSecundario);


	res = numeroPrimario + numeroSecundario;
	

	alert(res);
}

