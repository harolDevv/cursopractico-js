//CODIGO DEL CUADRADO

console.group("Cuadrados")

function perimetroCuadrado(lado){
    return lado * 4;
}
perimetroCuadrado();

function areaCuadrado(lado) {
    return lado * lado;
}
areaCuadrado()

// Aqui html cuadrado
function CalcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado")
    const value = input.value
    const perimetro = perimetroCuadrado(value);
    alert("El perimetro de tu cuadrado es: " + perimetro);
}

function CalcularAreaCuadrado () {
    const input = document.getElementById("InputCuadrado")
    const value = input.value;
    const area = areaCuadrado(value);
    alert("El area de tu cuadrado es: " + area);
}
console.groupEnd();

//CODIFO DEL TRIANGULO

console.group("Triangulos")

function perimetroTriangulo(lado1,lado2,ladobase) {
    return lado1 + lado2 +ladobase
}
perimetroTriangulo();

function areaTriangulo(base, altura) {
    return (base * altura) / 2
}
areaTriangulo();


// Aqui html cuadrado triangulo

function CalcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputTriangulo1")
    const input2 = document.getElementById("InputTriangulo2")
    const input3 = document.getElementById("InputTriangulobase")
    const value1 = Number(input1.value)
    const value2 = Number(input2.value)
    const valuebase = Number(input3.value)
    const perimetro = perimetroTriangulo(value1,value2,valuebase);
    alert("El perimetro de tu triangulo es: " + perimetro);
}
function CalcularAreaTriangulo() {
    const input3 = document.getElementById("InputTriangulobase")
    const inputalt = document.getElementById("InputTrianguloAltura")
    const valuebase = Number(input3.value)
    const valuealtura = Number(inputalt.value)
    const area = areaTriangulo(valuebase,valuealtura);
    alert("El area de tu triangulo es: " + area);
}
console.groupEnd();

//CIRCULOS 

console.group("Circulos")


function diametroCirculo(radio) {
    return radio * 2
}
diametroCirculo();

const PI = Math.PI;
console.log("El pi es: " + PI);


function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
perimetroCirculo();

function areaCirculo(radio) {
    return (radio * radio) * PI;
}
areaCirculo();


console.groupEnd();

//html circulo

function CalcularDiametroCirculo() {
    const inputCir = document.getElementById("InputCirculo")
    const valuecir = Number(inputCir.value)
    const diametro = diametroCirculo(valuecir)
    alert("El diametro de tu circulo es: " + diametro)
}
function CalcularPerimetroCirculo() {
    const inputCir = document.getElementById("InputCirculo")
    const valuecir = Number(inputCir.value)
    const diametro = diametroCirculo(valuecir)
    const perimetro = diametro * PI
    alert("El perimetro de tu circulo es: " + perimetro)
}
function CalcularAreaCirculo() {
    const inputCir = document.getElementById("InputCirculo")
    const valuecir = Number(inputCir.value)
    const area = areaCirculo(valuecir)
    alert("El area de tu circulo es: " + area)
}

//altura triangulo

function Altura(lado1,base) {
    const baseTRIANGULO = base / 2;
    const value1 = (lado1**2) - (baseTRIANGULO**2)
    const alt = Math.sqrt(value1)
    return alt;
}
Altura();

function CalcularAlturaTriangulo() {
    const InputIsosceles = document.getElementById("InputIsosceles1");
    const InputIsoscelesbase = document.getElementById("InputIsoscelesbase");
    const value1 = Number(InputIsosceles.value);
    const value2 = Number(InputIsoscelesbase.value);
    const altura = Altura(value1,value2);
    alert("La altura de tu triangulo es: " + altura)
}


