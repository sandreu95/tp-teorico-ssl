function ordenarPorBurbuja(arrayDesordenado) {
    var tempArray = arrayDesordenado;
    var volverAOrdenar = false;
    tempArray.forEach(function (valor, key) {
        if (tempArray[key] > tempArray[key + 1] && tempArray.length - 1 != key) {
            var primerNum = tempArray[key];
            var segundoNum = tempArray[key + 1];
            tempArray[key] = segundoNum;
            tempArray[key + 1] = primerNum;
            volverAOrdenar = true;
        }
    });
    if (volverAOrdenar) {
        ordenarPorBurbuja(tempArray);
    }
    return tempArray;
}
var numeros = [11, 5, 7, 6, 15];
var inicio = Date.now();
var sortedNumbers = ordenarPorBurbuja(numeros);
console.log(sortedNumbers);
var fin = Date.now();
console.log("Execution time: ".concat((fin - inicio) / 1000, " s"));
