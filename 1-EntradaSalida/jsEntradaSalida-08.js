/* Martin Gilberto
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numeroPrimario;
	var numeroSecundario;
	var res;
	var mensaje;

	numeroPrimario = document.getElementById("txtIdNumeroDividendo").value;
	numeroSecundario = document.getElementById("txtIdNumeroDivisor").value;

	numeroPrimario = parseInt(numeroPrimario);
	numeroSecundario = parseInt(numeroSecundario);

	res = numeroPrimario % numeroSecundario;


	mensaje = "El resto es: ";

	alert(mensaje + res);
                     

}
