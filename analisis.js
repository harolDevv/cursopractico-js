//Funciones Helpers

function esPar(numero){
    return (numero % 2 === 0);  
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

//calculadore de salarios

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);
    if(esPar(lista.length)){
        const mitadp1 = lista[mitad - 1]
        const mitadp2 = lista[mitad]
        const result = calcularMedia([mitadp1, mitadp2])
        return result
    } else {
        const mitadp = lista[mitad]
        return mitadp
    }
}

// Mediana General
const salariosCol = colombia.map(
    function(persona){
        return persona.salary
    }
);

const salariosColSorted = salariosCol.sort(
    function(a,b){
        return a - b
    }
);
const medianaGeneralCol = medianaSalarios(salariosColSorted)


//Mediana del top10%

const splicestart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - splicestart;

const salariostop10 = salariosColSorted.splice(
    splicestart,
    spliceCount,
);

const medianaTop10 = medianaSalarios(salariostop10)


console.log({
    medianaGeneralCol,
    medianaTop10
});