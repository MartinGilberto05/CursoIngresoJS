/* Martin Gilberto Div H
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	//Declarar variables
	var numeroCarta;
	var acumuladorCarta;
	var maximo;

	maximo = 21;
	acumuladorCarta = 0;
	
	while(acumuladorCarta < maximo)
	{
		numeroCarta = prompt("Ingrese una carta entre 1 y 12");
		numeroCarta = parseInt(numeroCarta);

		while(numeroCarta < 1 || numeroCarta > 12)
		{
			numeroCarta = prompt("ingrese nueva carta");
			numeroCarta = parseInt(numeroCarta);
		}
		acumuladorCarta += numeroCarta;
	}
	//INFORMO
alert("suma: " + acumuladorCarta);

}//FIN DE LA FUNCIÓN