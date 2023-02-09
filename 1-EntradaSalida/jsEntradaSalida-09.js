/* Martin Gilberto
Ejercicio 9 bis: 
Debemos lograr tomar el importe por ID.value ,
transformarlo a entero "parseInt()", luego
mostrar el importe con un aumento ingresado por el usuario a través de un prompt.
 en el cuadro de texto "txtIdResultado"*/
function mostrarAumento()
{
	var sueldo;
	var n2;
	var porcentaje;
	var aumento;
	var resultado;

	sueldo = document.getElementById("txtIdSueldo").value;

	//logica
	sueldo = parseInt(sueldo);
	n2 = parseInt(n2);
	aumento = prompt("Ingresar aumento.");
	porcentaje = (sueldo/100)*aumento;
	resultado = sueldo + porcentaje;

	//mostrar resultado
	n2 = document.getElementById("txtIdResultado").value = resultado;


	
}
