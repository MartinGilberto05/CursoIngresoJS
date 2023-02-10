/* Martin Gilberto
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive

*/


function mostrar()
{ 
	//declarar variables
	var x;
	var mensaje;
	
	//proseso
	 x = Math.floor(Math.random(x) * (10 - 1) + 1);

	 mensaje = "el numero random es: "
	
	 alert(mensaje + x);
	
}//FIN DE LA FUNCIÓN