//CODIGO DEL CUADRADO

console.group("Cuadrados")

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + "cm2");

console.groupEnd();

//CODIFO DEL TRIANGULO

console.group("Triangulos")

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTriangulobase = 4;
const alturaTriangulo = 5.5;


console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm" + " a los lados " + " y " + ladoTriangulobase + "cm" +  " En la base" );

const perimetroTriangulo= ladoTriangulo1 + ladoTriangulo2 + ladoTriangulobase;
console.log("El perimetro del Triangulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (alturaTriangulo * ladoTriangulobase) / 2 ;
console.log("El area del triangulo es: " + areaTriangulo + "cm2");

console.groupEnd();

//CIRCULOS 

console.group("Circulos")


const radioCirculo = 4;
console.log("El radio del ciculo es: " + radioCirculo + "cm");
const diametrotroCirculo = radioCirculo * 2;
console.log("El diametro del Circulo es: " + diametrotroCirculo + "cm");
const PI = Math.PI;
console.log("El pi es: " + PI);
const perimetroCirculo = diametrotroCirculo * PI;
console.log("El perimetro del circulo es: " + perimetroCirculo);
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo es: " + areaCirculo);








console.groupEnd();