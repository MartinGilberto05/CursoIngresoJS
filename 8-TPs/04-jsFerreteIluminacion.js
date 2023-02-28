/* Martin Gilberto  div H

4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */
 function CalcularPrecio()
{
    //declarar variables 
    var cantLamparas;
    var marcaLampara;
 
    var DESCUENTO = 0;
    var PRECIO_LAMPARA = 35;
    var IMPUESTO_IIBB = 10;
 
    var precioSinDescuento;
    var descuentoCalculado;
    var precioConDescuento;
    var calculoIIBB;
 
 
    //tomar datos
    cantLamparas = document.getElementById("txtIdCantidad").value;
    marcaLampara = document.getElementById("Marca").value;
 
    cantLamparas = parseInt(cantLamparas);
    //proceso
 
    switch(cantLamparas)
    {
        case 5:
            switch(marcaLampara)
            {
                case "ArgentinaLuz":
                    DESCUENTO = 40;
                    break
                default:
                    DESCUENTO = 30;
                    break;
            }
            break;
        case 4:
            switch(marcaLampara)
            {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    DESCUENTO = 25;
                    break;
                default:
                    DESCUENTO = 20;
                    break;
            }
            break;
        case 3:
            switch(marcaLampara)
            {
                case "ArgentinaLuz":
                    DESCUENTO = 15;
                    break;
                case "FelipeLamparas":
                    DESCUENTO = 10;
                    break;
                default:
                    DESCUENTO = 5;
                    break;
            }
            break;
        case 2:
        case 1:
            DESCUENTO = 0;
            break;
            default:
                DESCUENTO = 50;
     }   
 
    //realizo calculo de descuentos, costo, 
    precioSinDescuento = cantLamparas * PRECIO_LAMPARA;
    descuentoCalculado = (precioSinDescuento * DESCUENTO) /100;
    precioConDescuento = precioSinDescuento - descuentoCalculado;
 
    if(precioConDescuento > 119)
    {
        //calculando el IIBB
        calculoIIBB = (precioConDescuento * IMPUESTO_IIBB) / 100;
        precioConDescuento = precioConDescuento + calculoIIBB;
        alert("Usted pago " + precioConDescuento.toFixed(2) + " de IIBB ");
    }
 
    //informo
    document.getElementById("txtIdprecioDescuento").value = precioConDescuento.toFixed(2);
    
    console.log(`
    CANT. LAMPARAS: ${cantLamparas}
    MARCA: ${marcaLampara}
    DESCUENTO APLICADO: ${DESCUENTO}%
    PRECIO SIN DESCUENTO: ${precioSinDescuento}
    PRECIO CON DESCUENTO: ${precioConDescuento}`);
   
}