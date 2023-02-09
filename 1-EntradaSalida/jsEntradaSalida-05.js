/* Martin Gilberto
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//primer paso declarar las variables 
	var nombre;
	var edad;
	var mensaje;

	//segundo paso asignar un valor a las variables 
	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;
	
	//tercer paso calcular
	mensaje = "Usted se llama "+ nombre + " y tiene " + edad + " años";


	

	//cuarto paso mostrar el mensaje
	alert(mensaje);



}

