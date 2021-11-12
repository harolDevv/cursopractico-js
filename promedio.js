
function calcularMedia(lista) {
    // let sumaLista = 0;
    // for (let i = 0; i < lista1.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento
        }
    )
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
    
}

// mediana

function calcularMediana(lista) {
    
    const mitadListas1 = parseInt(lista.length / 2);
    
    
    function Par(numero) {
        if(numero % 2 === 0){
            return true
        } else{
            return false
        }
    }
    
    let mediana;
    
    if(Par(lista.length)){
        const elemento1 = lista[mitadListas1 - 1];
        const elemento2 = lista[mitadListas1];
        const promedioelemento1y2 = calcularMedia([elemento1,elemento2]);
        mediana = promedioelemento1y2
        return mediana
    } else{
        mediana = lista[mitadListas1]
        return mediana
}




}