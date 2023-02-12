/* Martin Gilberto
Enunciado:
al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"
*/



function mostrar()
{
    //declaro variables 
    var mesDelAño;
	var mensaje;

    //extraer datos
	mesDelAño = document.getElementById("txtIdMes").value;

    //preceso
    switch (mesDelAño)
	{
    case "Febrero":
        mensaje = "Este mes no tiene más de 29 días.";
        break;

    default:
		mensaje = "Este mes tiene 30 o más días";
        break;
}

    //informo
	alert(mensaje);
}
