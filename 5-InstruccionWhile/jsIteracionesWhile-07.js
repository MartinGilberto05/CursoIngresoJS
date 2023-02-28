/* Martin Gilberto Div. H
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	//declarar bariables
	var numero;
	var contador;
	var acumulador;
	var respuesta;
	var promedio;

	//proceso
	contador = 0;
	acumulador = 0;
	respuesta ='si'; 

	while(respuesta == "si")
	{
		numero = prompt("Coloque un Numero");
		numero = parseInt(numero);

		acumulador = acumulador + numero;

		respuesta = prompt("Queres seguir ingresando numeros??");

		contador = contador + 1;
	}

	promedio = acumulador / contador;
	
	//Informar
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio.toFixed(2);

}//FIN DE LA FUNCIÓN


//txtIdSuma.value=acumulador;
//txtIdPromedio.value=acumulador/contador;