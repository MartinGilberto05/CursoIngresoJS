/* Martin Gilberto
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/


function mostrar()
{
 //declaro variables 
 var nota;
 var mensaje;
 


 //proseso
  nota = Math.floor(Math.random(nota) * 9 + 1);

  if(nota > 8)
  {
	mensaje = "EXCELENTE Nota: ";
  }
  else 
  {
	if(nota < 4)
	{
		mensaje = "Vamos, la proxima se puede";
	}
	else
	{
		mensaje = "APROBO la nota es: ";
	}
  }

  
//Informo
alert(mensaje + nota);

}//FIN DE LA FUNCIÓN