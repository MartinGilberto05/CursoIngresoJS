/* Martin Gilberto
Enunciado:
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
*/
function mostrar() {
	//tomo el mes
	var mesDelAño;
	var mensaje;

	//extraer datos 
	mesDelAño = document.getElementById("txtIdMes").value;
	//proceso
	switch (mesDelAño) 
	{
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje = "Tienen 30 dias.";
		break;

		case "Febrero":
			mensaje = "Tiene 28 días.";
		break;

		default:
			mensaje = "Tiene 31 días.";
		break;
	}

	//inforrmo
	alert(mensaje);
}//FIN DE LA FUNCIÓN



