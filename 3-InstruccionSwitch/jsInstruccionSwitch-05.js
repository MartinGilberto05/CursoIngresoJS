/* Martin Gilberto
Enunciado:
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
*/
function mostrar()
{
	//tomo la hora
	var horaDelDia;
	var mensaje;
//extraer daatos
horaDelDia = document.getElementById("txtIdHora").value;
horaDelDia = parseFloat(horaDelDia);
//proceso
switch(horaDelDia)
{
	case 7:
	case 8:
	case 9:
	case 10:
	case 11:	
		mensaje = "Es de mañana.";
	break;

	default:
		mensaje = "No hay dato"
	break;
}
//informo
	alert(mensaje);
	
}//FIN DE LA FUNCIÓN