/*
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", 
mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
*/


function mostrar()
{
	//declarar variables 
	var edad;
	var estadoCivil;

	//extraer datos
	edad = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;

	//proceso
	edad = parseInt(edad);

	if(edad < 18 && estadoCivil != "Soltero")
	{
		alert("Es muy pequeño para NO ser soltero");

	}

}//FIN DE LA FUNCIÓN

//txtIdEdad estadoCivil