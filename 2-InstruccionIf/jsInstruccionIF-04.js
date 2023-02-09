/* Martin Gilberto
Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive).
*/
function mostrar()
{
	//declaramos variable 
	var edad;

	//extraemos datos
	edad = document.getElementById("txtIdEdad").value;

	//proceso
	edad = parseInt(edad);
	if(edad > 12 &&  edad < 17)
	{
		alert("Es adolescente");
	}
	


}//FIN DE LA FUNCIÓN