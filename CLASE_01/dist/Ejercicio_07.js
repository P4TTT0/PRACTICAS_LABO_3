"use strict";
function obtenerNumerosPrimo(numerosPrimos) {
    let arrayNumerosPrimo = [];
    let numeroActual = 2;
    let cantidadDivisoresIntegrales = 0;
    while (arrayNumerosPrimo.length < numerosPrimos) {
        for (let j = 1; j <= numeroActual; j++) {
            if (numeroActual % j == 0) {
                cantidadDivisoresIntegrales++;
            }
            if (cantidadDivisoresIntegrales > 3) {
                break;
            }
        }
        if (cantidadDivisoresIntegrales == 2) {
            arrayNumerosPrimo.push(numeroActual);
        }
        numeroActual++;
        cantidadDivisoresIntegrales = 0;
    }
    return arrayNumerosPrimo;
}
let arrayNumerosPrimo = obtenerNumerosPrimo(20);
for (let i = 0; i < arrayNumerosPrimo.length; i++) {
    console.log(`NUMERO PRIMO [${i + 1}]: ${arrayNumerosPrimo[i]}`);
}
//# sourceMappingURL=Ejercicio_07.js.map