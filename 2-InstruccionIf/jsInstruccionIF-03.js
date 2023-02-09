/* Martin Gilberto
Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.
*/



function mostrar()
{
	//declarar variables 
	var edad;

	//extraer datos
	edad = document.getElementById("txtIdEdad").value;

	//proceso 
	edad = parseInt(edad);
	if(edad > 17)
	{
		alert("La persona es mayor de edad");
	}else
	{
		if(edad > -1)
		{
			alert("Es un menor de edad");
		}
	}


}//FIN DE LA FUNCIÓN