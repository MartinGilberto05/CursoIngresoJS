/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	var numIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var continuar = true;
	var bandera;

	bandera = "es la primera vez";

	while(continuar == true)
	{
		numIngresado = prompt("Dame un numero");
		numIngresado = parseInt(numIngresado);
		console.log(numIngresado)

		if(bandera == "es la primera vez")
		{
			numeroMaximo = numIngresado;
			numeroMinimo = numIngresado;
			bandera = "ya paso";
			console.log(numIngresado)
		}
		else
		{

			if(numIngresado > numeroMaximo)
			{
				numeroMaximo = numIngresado;
				console.log(numIngresado)
			}
			else
			{
				numeroMinimo = numIngresado;
				console.log(numIngresado)
			}
		}

		continuar = confirm("Desea continuar?");
	}



	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;
}