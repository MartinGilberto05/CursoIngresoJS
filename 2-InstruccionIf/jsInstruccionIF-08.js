function mostrar()
{
	//tomo la edad  
	var edad;
    var estadoCivil;

    //Asignamos Variables 
    edad = document.getElementById("txtIdEdad").value;
    estadoCivil = document.getElementById("estadoCivil").value;

    //Parseamos la edad
    edad = parseInt(edad);

    //Verificamos que la edad sea menor a 18 y que el estado civil no sea igual a "Soltero" 
    if (edad < 18 && estadoCivil != "Soltero") {

        alert("Es muy pequeño para no ser soltero")

	}


}//FIN DE LA FUNCIÓN