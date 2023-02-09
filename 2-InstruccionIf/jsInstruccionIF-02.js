/* Martin Gilberto
Al ingresar una edad debemos informar solo si la persona es mayor de edad
*/

function mostrar()
{
	//declarar variables 
	var edad;

	//extraer datos
	edad = document.getElementById("txtIdEdad").value;

	//preceso
	edad = parseInt(edad);

	if(edad > 17)
	{
		alert("La persona es mayor de edad");
	}
	

	

}//FIN DE LA FUNCIÓN