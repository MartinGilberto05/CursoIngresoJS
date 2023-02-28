/* Martin Gilberto Div H
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada = "utn750";
	var intentos = 1;
	var mensaje;
	
	claveIngresada = prompt("ingrese el número clave.");

	while (claveIngresada != "utn750") 
	{
		claveIngresada = prompt("Error Ingrese de nuevo");
	}
	
	mensaje = "Bienvenido";

	alert(mensaje);
}//FIN DE LA FUNCIÓN

//al presionar el botón pedir la CLAVE (ayuda: es utn750) solo darle 3 intentos. (mostrar cuantos les queda).