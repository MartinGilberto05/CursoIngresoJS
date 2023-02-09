/* Martin Gilberto

2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    //declarar variables 
    var largoTerreno;
    var anchoTerreno;
    var perimetro;
    var cantVuelta;
    var mensaje;

    //tomar datos 
    largoTerreno = document.getElementById("txtIdLargo").value;
    anchoTerreno = document.getElementById("txtIdAncho").value;
    //Proseso
    largoTerreno = parseFloat(largoTerreno);
    anchoTerreno = parseFloat(anchoTerreno);

    perimetro = largoTerreno + largoTerreno + anchoTerreno + anchoTerreno;
    cantVuelta = perimetro * 3;

    mensaje = "La cantidad necesaria para ser TRES pasadas de alambre es: " + cantVuelta + " Mts";

    //Informo
    alert(mensaje);
    

}
function Circulo () 
{   
    //Declarar variables; 
	var radioTerreno;
    var perimetroTerreno;
    var circunferenciaTerreno;
    var mensaje;

    //tomar datos
    radioTerreno = document.getElementById("txtIdRadio").value;

    //Proseso
    radioTerreno = parseFloat(radioTerreno);
    perimetroTerreno = radioTerreno * 2 * Math.PI;
    circunferenciaTerreno = perimetroTerreno * 3;

    mensaje = "La cantidad necesaria para tres pasadas de alambre es: " + circunferenciaTerreno.toFixed(2) + " Mts.";

    //Informe 
    alert(mensaje);
}
function Materiales () 
{
	//Declar variables 
    var largoTerreno;
    var anchoTerreno;
    var perimetro;
    var cemento ;
    var cal ;
    var bolsaCemento;
    var bolsaCal;
    var mensaje;


    //tomar datos 
    largoTerreno = document.getElementById("txtIdLargo").value;
    anchoTerreno = document.getElementById("txtIdAncho").value;
    cemento = 2
    cal = 3 

    //proseso
    largoTerreno = parseInt(largoTerreno);
    anchoTerreno = parseInt(anchoTerreno);
    perimetro = largoTerreno * anchoTerreno;
    mensaje = "Metros cuadrados : " + perimetro + "\n"

    bolsaCemento = perimetro * cemento;
    mensaje += "Cantidad de bolsas de cemento: " + bolsaCemento + "\n";
    bolsaCal = perimetro * cal;
    mensaje += "Cantidad de bolsas de cal: " + bolsaCal;
     
    //Informe
    alert(mensaje);
}




