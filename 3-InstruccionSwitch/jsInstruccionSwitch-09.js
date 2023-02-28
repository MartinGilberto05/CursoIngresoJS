/*Martin Gilberto
Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , 
se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y 
localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% 
Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y 
Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% 
cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/


function mostrar()
{
//declarar variables 
	var estacionIngresada;
	var destinoIngresado;

	var valorBase = 15.000;
	var tarifa;
	var DESCUENTO = 0;
	var AUMENTO = 0;

	var mensaje;

//extraer datos
	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;
//proceso	
	switch (estacionIngresada) {
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Cataratas":
				case "Cordoba":
					DESCUENTO = 10;
					break;
				case "Mar del plata":
					DESCUENTO = 20;
					break;
				case "Bariloche":
					AUMENTO = 20;
					break;
			}
			break;
		case "Verano":
			switch(destinoIngresado)
			{
				case "Cataratas":
				case "Cordoba":
					AUMENTO = 10;
					break;
				case "Mar del plata":
					AUMENTO = 20;
					break;
				case "Bariloche":
					DESCUENTO = 20;
					break;
			}
			break;
		case "Primavera":
		case "Otoño":
			switch(destinoIngresado)
			{
				case "Catamarca":
				AUMENTO = 10;
			}
			
		
	}
//informo	
	alert(mensaje);
	
}//FIN DE LA FUNCIÓN

//txtIdEstacion txtIdDestino