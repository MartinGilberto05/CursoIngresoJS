/* Martin Gilberto
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/


function mostrar()
{
	var destinoIngresado; 
	var mensaje;
//extraer datos
	destinoIngresado = document.getElementById("txtIdDestino").value;

//proceso

	switch(destinoIngresado)
	{
		case "Bariloche":
			mensaje = "FRIO";
		break;

		case "Cataratas":
			mensaje = "CALOR";
		break;

		case "Mar del plata":
			mensaje = "CALOR";
		break;

		case "Ushuaia":
			mensaje = "FRIO";
		break;
	}
	
//informo	
	alert("En el destino hace: " + mensaje);

}//FIN DE LA FUNCIÓN