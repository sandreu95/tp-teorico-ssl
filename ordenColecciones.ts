function ordenarPorBurbuja(arrayDesordenado: number[]): number[] {
    let tempArray: number[] = arrayDesordenado;
    let volverAOrdenar: boolean = false
    tempArray.forEach(function (valor, key) {
        if (tempArray[key] > tempArray[key + 1] && tempArray.length - 1 != key) {
            const primerNum: number = tempArray[key]
            const segundoNum: number = tempArray[key + 1]
            tempArray[key] = segundoNum
            tempArray[key + 1] = primerNum
            volverAOrdenar = true
        }
    })
    if (volverAOrdenar) {
        ordenarPorBurbuja(tempArray)
    }
    return tempArray
}

const numeros: number[] = [11,5,7,6,15];
const inicio = Date.now();

const sortedNumbers: number[] = ordenarPorBurbuja(numeros);
console.log(sortedNumbers);

const fin = Date.now();
console.log(`Execution time: ${(fin - inicio)/1000} s`);
