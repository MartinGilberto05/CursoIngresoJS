/*
Al ingresar una edad solo debemos informar si la persona NO es adolescente.
*/

function mostrar()
{
	//declarar variable 
	var edad;

	//extraer dato
	edad = document.getElementById("txtIdEdad").value;

	//proceso
	edad = parseInt(edad);

	if(edad < 13 || edad > 17)
	{
		alert("NO es adolescente");
	}

}//FIN DE LA FUNCIÓN