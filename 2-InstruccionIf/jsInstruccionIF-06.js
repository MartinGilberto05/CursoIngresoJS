/* Martin Gilberto
Al ingresar una edad debemos informar si la persona
es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
*/


function mostrar()
{
	//declarar variable 
	var edad;

	//extraer dato
	edad = document.getElementById("txtIdEdad").value;

	//proceso
	edad = parseInt(edad);

	if(edad > 17)
	{
		alert("Es mayor");
	}else
	{
		if(edad < 13)
		{
			alert("Es un niño");
		}
		else
		{
			alert("Es adolecente");
		}
	}


}//FIN DE LA FUNCIÓN