//CODIGO DEL CUADRADO

console.group("Cuadrados")

function perimetroCuadrado(lado){
    return lado * 4;
}
perimetroCuadrado();
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado) {
    return lado * lado;
}
areaCuadrado()
// console.log("El area del cuadrado es: " + areaCuadrado + "cm2");

console.groupEnd();

//CODIFO DEL TRIANGULO

console.group("Triangulos")

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const ladoTriangulobase = 4;
// const alturaTriangulo = 5.5;


// console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm" + " a los lados " + " y " + ladoTriangulobase + "cm" +  " En la base" );

function perimetroTriangulo(lado1,lado2,ladobase) {
    return lado1 + lado2 +ladobase
}
perimetroTriangulo();
// console.log("El perimetro del Triangulo es: " + perimetroTriangulo + "cm");

// const areaTriangulo = (alturaTriangulo * ladoTriangulobase) / 2 ;
function areaTriangulo(base, altura) {
    return (base * altura) / 2
}
areaTriangulo();
// console.log("El area del triangulo es: " + areaTriangulo + "cm2");

console.groupEnd();

//CIRCULOS 

console.group("Circulos")


// const radioCirculo = 4;
// console.log("El radio del ciculo es: " + radioCirculo + "cm");
function diametroCirculo(radio) {
    return radio * 2
}
diametroCirculo();
// console.log("El diametro del Circulo es: " + diametrotroCirculo + "cm");
const PI = Math.PI;
console.log("El pi es: " + PI);


function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
perimetroCirculo();
// const perimetroCirculo = diametrotroCirculo * PI;
// console.log("El perimetro del circulo es: " + perimetroCirculo);

function areaCirculo(radio) {
    return (radio * radio) * PI;
}
areaCirculo();
// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log("El area del circulo es: " + areaCirculo + "cm2");








console.groupEnd();