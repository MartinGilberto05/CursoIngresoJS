/* Martin Gilberto div H 
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/


function mostrar()
{
	//txtIdNombre
	let miImput;
	miImput = document.getElementById("txtIdNombre").value;
	alert(miImput);
}

// value es un atributo que tiene el objeto 
//miImput = prompt("Dame un texto"); // toma dato de ventana emergente


//miImput = document.getElementById("txtIdNombre").value; // tomar datos de un elemento del DOM
//miImput = txtIdNombre.value;