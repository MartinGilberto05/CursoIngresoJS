/*Martin Gilberto
Enunciado:
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
*/
function mostrar()
{
	//designar variables 
	var mesDelAño;
	var mensaje;

	//tomo el dato
	mesDelAño = document.getElementById("txtIdMes").value;

	//proceso
	switch (mesDelAño)
	{
		case "Junio":
		case "Julio":
		case "Agosto":
			mensaje = "Abrigate que hace frio.";	
		break;

		case "Enero":
		case "Febrero":	
		case "Marzo":
		case "Abril":
		case "Mayo":
			mensaje = "Falta para el invierno.";
		break;

	
		default:
			mensaje = "Ya pasamos el frio, ahora calor!!!."; 
		break;
	}

	//informo
	alert(mensaje);	

}//FIN DE LA FUNCIÓN