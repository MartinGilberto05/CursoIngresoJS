/* Martin Gilberto
Enunciado:
Al selecionar un destino , 
indicar el punto cardinal de nuestro pais en donde se encuentra 
Norte, Sur, Este u Oeste
*/

function mostrar()
{
//declarar variables 
	var destinoIngresado;
	var mensaje; 
//extraer datos
	destinoIngresado = document.getElementById("txtIdDestino").value;

//proceso
	switch(destinoIngresado)
	{
		case "Bariloche":
			mensaje = "Oeste";
		break;

		case "Cataratas":
			mensaje = "Norte";
		break;

		case "Mar del plata":
			mensaje = "Este";
		break;

		case "Ushuaia":
			mensaje = "Sur";
		break;

	}

//informo
	alert("El punto cardional es: " + mensaje);

}//FIN DE LA FUNCIÓN

// Bariloche Cataratas Mar del plata Ushuaia