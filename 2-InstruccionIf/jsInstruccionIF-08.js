/* Martin Gilberto
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'
*/


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

     
    if (edad < 18 && estadoCivil != "Soltero") 
    {
        
	}
    else
    {
        if(edad > 17 && estadoCivil == "Soltero")
        {
            alert("Es soltero y no es menor.");
        }
    }


}//FIN DE LA FUNCIÓN