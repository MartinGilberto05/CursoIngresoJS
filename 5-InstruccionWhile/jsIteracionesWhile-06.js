/* Martin Gilberto Div. H
Enunciado:
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
*/


function mostrar()
{
	//declarar variable;
	var acumulador;
	var numeroIngresado;
	var maxNumeroIngresado;
	var PromAcumulado;
	
	//proceso
	maxNumeroIngresado = 0;
	acumulador = 0;

	while(maxNumeroIngresado < 5)
	{	//extraer datos
		numeroIngresado = prompt("ingrese el siguiente numero:");
	 	numeroIngresado = parseInt(numeroIngresado);
		//suma de numeros ingresados
		acumulador = acumulador + numeroIngresado;
		//contador
		maxNumeroIngresado++;
		
	}
		//promedio 
		PromAcumulado = acumulador / maxNumeroIngresado;

	//informar	
	 document.getElementById("txtIdSuma").value = acumulador;
	 document.getElementById("txtIdPromedio").value = PromAcumulado;

}//FIN DE LA FUNCIÓN