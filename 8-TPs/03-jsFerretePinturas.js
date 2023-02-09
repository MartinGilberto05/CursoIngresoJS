/* Martin Gilberto
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	//declarar variable
    var tempFahrenheit;
    var gradoFahrenheit;
    var gradoCentígrados;
    var mensaje;

    //extraer datos 
    tempFahrenheit = document.getElementById("txtIdTemperatura").value;

    //proseso
    tempFahrenheit = parseInt(tempFahrenheit);
    gradoFahrenheit = 32;
    gradoCentígrados = (tempFahrenheit - gradoFahrenheit) * 5/9;
    
    mensaje = tempFahrenheit + " Fahrenheit son " + gradoCentígrados.toFixed(2) + " centígrados";

    //Informe
    alert(mensaje);
}

function CentigradosFahrenheit () 
{
    //declarar variable
    var tempCentigrado;
    var gradoFahrenheit; 
    var grado;
    var mensaje;

    //extraer datos 
    tempCentigrado = document.getElementById("txtIdTemperatura").value;

    //proseso
    tempCentigrado = parseInt(tempCentigrado);
   
    gradoFahrenheit = 32;
    grado = (tempCentigrado * 9/5) + gradoFahrenheit;

    mensaje = tempCentigrado + " centígrados son: " + grado.toFixed(2) + " Fahrenheit";
    
    //Informe

    alert(mensaje);
}


//txtIdTemperatura