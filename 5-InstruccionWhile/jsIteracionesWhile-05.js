/* Martin Gilberto Div. H
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()

{

    //Deaclaramos viariables
    var sexoIngresado;
	var mensaje;

    //Asignamos valores
    sexoIngresado = "";

	//proceso
    while (sexoIngresado != "f" && sexoIngresado != "m")
    {
        sexoIngresado = prompt("INGRESE f O m SEGÚN CORRESPONDA.");
       
    }
	if(sexoIngresado == "f")
	{
		mensaje = "FEMENINO";
	}
	else
	{
		mensaje = "MASCULINO";
	}

	document.getElementById("txtIdSexo").value = mensaje; 
}