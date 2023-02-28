/* Martin Gilberto Div. H
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	//asignar variables
	
	var numeroIngresado;
	var sumaPositivos;
	var multiplicacionNegativos;
	var continuar;
	//estraer dato

	//proceso
	sumaPositivos = 0;
	multiplicacionNegativos=0;
	
	continuar = true;

	while(continuar == true)
	{
		numeroIngresado = prompt("Indique un numero.");
		numeroIngresado = parseInt(numeroIngresado);
		
		if(numeroIngresado > 0) 
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
		}else
		{
			multiplicacionNegativos = multiplicacionNegativos = numeroIngresado;
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
		}
		
		continuar = confirm("Continuar");
	} 
	
	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN