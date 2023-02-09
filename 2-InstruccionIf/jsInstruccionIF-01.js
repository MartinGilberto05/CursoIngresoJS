/* Martin Gilberto
Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".
*/
function mostrar()
{
	//tomo la edad
	
	//declarar variables.
	var edad;
	var mensaje

	//extraer datos 
	edad = document.getElementById("txtIdEdad").value;
	
	//proceso
	edad = parseInt(edad);

	if (edad == 15)
	 {
		mensaje ="niña bonita"; 

		//informe
		alert(mensaje);
	}
	      
}//FIN DE LA FUNCIÓN