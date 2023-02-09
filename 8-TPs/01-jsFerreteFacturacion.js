/* Martin Gilberto
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	//declaro la variables
    var precioUno;
    var precioDos;
    var precioTres;
    var res;
    var mensaje;
    //asignar las variables 
    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;

    precioUno = parseFloat(precioUno);
    precioDos = parseFloat(precioDos);
    precioTres = parseFloat(precioTres);

    res = (precioUno + precioDos + precioTres);
    mensaje ="El total de la factura es: " + res;

    alert(mensaje);
}
function Promedio () 
{
	//declaro la variables
    var precioUno;
    var precioDos;
    var precioTres;
    var res;
    var mensaje;
    //asignar las variables 
    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;

    precioUno = parseFloat(precioUno);
    precioDos = parseFloat(precioDos);
    precioTres = parseFloat(precioTres);

    res = (precioUno + precioDos + precioTres) / 3;
    mensaje ="El promedio es: " + res;

    alert(mensaje);
}
function PrecioFinal () 
{
	//declaro la variables
    var precioUno;
    var precioDos;
    var precioTres;
    var res;
    var porcentaje;
    var mensaje;
    var resultado;
    //asignar las variables 
    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;

    precioUno = parseFloat(precioUno);
    precioDos = parseFloat(precioDos);
    precioTres = parseFloat(precioTres);

    res = (precioUno + precioDos + precioTres);
    porcentaje = (res/100)*21;
    resultado = res + porcentaje;

    mensaje = "TOTAL: " + resultado + " con IVA incluido (21%)";
    
    alert(mensaje);
}

