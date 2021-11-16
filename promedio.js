

function CalcularMediab(){
    const numbers = document.getElementById("inputM").value;
    let listanumber = [];
    listanumber = numbers.split(",");
    const listanumber2 = listanumber.map(x => Number(x))
    const resultado = calcularMedia(listanumber2);
    const resultP = document.getElementById("ResultP")               
    resultP.innerHTML = "La media es: " + resultado;                                               
}   
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

function CalcularMedianab(){
    const numbers = document.getElementById("inputM").value;
    let listanumber = [];
    listanumber = numbers.split(",");
    const listanumber2 = listanumber.map(x => Number(x))
    const resultado = calcularMediana(listanumber2);
    const resultP = document.getElementById("ResultP")               
    resultP.innerHTML = "La mediana es: " + resultado;                                               
}

function calcularMediana(lista) {
    lista.sort(function(a,b){return b - a });
    
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


function CalcularModab(){
    const numbers = document.getElementById("inputM").value;
    let listanumber = [];
    listanumber = numbers.split(",");
    const listanumber2 = listanumber.map(x => Number(x))
    const resultado = calcularModa(listanumber2);
    const resultP = document.getElementById("ResultP")               
    resultP.innerHTML = "La moda es: " + resultado;                                               
}



function calcularModa(lista) {
    const lista1Count = {};
    
    lista.map(
        function(elemento) {
            if( lista1Count[elemento]){
                lista1Count[elemento] += 1;
            } else{
                lista1Count[elemento] = 1;
            }
        }
    );
    
    const lista1Array = Object.entries(lista1Count).sort(
        function(elementoA , elementoB){
            return elementoA[1] - elementoB[1];
        }
    );
    
    const moda = lista1Array[lista1Array.length - 1];
    const result = moda.shift();
    return result
}
