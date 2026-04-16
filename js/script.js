let a = 1;
let b = 2;

function sumar(a=0, b=0) {
    // aquí se realiza la suma de a y b
    const resultado = a + b;
    // se muestra el resultado en la consola
    alert("El resultado de la suma es: " + resultado);
}

//sumar(2, 3);
//sumar(5, 7);

function restar(a=0, b=0) {
    const resultado = a - b;
    alert("El resultado de la resta es: " + resultado);
}

//restar(10, 4);
//restar(20, 5);

document.addEventListener("click", function() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const rgb = "rgb(" + red + "," + green + "," + blue + ")";
    document.body.style.backgroundColor = rgb;
});