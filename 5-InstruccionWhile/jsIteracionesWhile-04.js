/* Martin Gilberto Div. H
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;

	numeroIngresado = prompt("Ingrese un numero entre 0 y 9");
	numeroIngresado = parseInt(numeroIngresado);
	
	while(numeroIngresado < 0 || numeroIngresado > 9)
	{
		numeroIngresado = prompt("Numero erroneo");
		numeroIngresado = parseInt(numeroIngresado);
	}
	
	document.getElementById("txtIdNumero").value = numeroIngresado;

}//FIN DE LA FUNCIÓN