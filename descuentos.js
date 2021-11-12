
function Descuentos(precio,descuento) {
    const preciocondescuento = 100 - descuento
    const resultado = (precio * (preciocondescuento)) / 100
    return resultado;
}


function CalcularPrecioFinal() {
    const Price = document.getElementById("InputPrice")
    const descuento = document.getElementById("InputDiscount")
    const ValuePrice = Number(Price.value)
    const Valuedescuento = Number(descuento.value)
    const result = Descuentos(ValuePrice,Valuedescuento);
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio final es: $" + result;
}