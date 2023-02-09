/* Martin Gilberto

Ejercicio 10 bis:
Debemos lograr tomar el importe por ID.value ,

transformarlo a entero "parseInt()", luego
mostrar el importe con un decuento 

ingresado por el usuario a través de un prompt.  en el cuadro de texto "txtIdResultado"
*/
function mostrarAumento()
{
	//declarar variables 
	var importe
	var n2
	var porcentaje
	var descuento
	var resultado

	importe = document.getElementById("txtIdImporte").value;

	//logica
	importe = parseInt(importe);
	n2 = parseInt(n2);
	descuento = prompt("Ingresar descuento.");
	porcentaje  = (importe/100)*descuento;
	resultado = importe - porcentaje;

	//mostrar resultado
	n2 = document.getElementById("txtIdResultado").value = resultado;

	
	
}
