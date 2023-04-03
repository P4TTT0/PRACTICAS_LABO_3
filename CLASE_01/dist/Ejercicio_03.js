"use strict";
function repeticionCadena(repeticiones, mensaje) {
    if (mensaje) {
        console.log(`Se ha escrito el mensaje: "${mensaje}" ${repeticiones} vez/veces`);
        for (let i = 0; i < repeticiones; i++) {
            console.log(mensaje);
        }
    }
    else {
        console.log(-repeticiones);
    }
}
repeticionCadena(Math.floor(Math.random() * 10), "¡Hola mundo!");
repeticionCadena(Math.floor(Math.random() * 10));
//# sourceMappingURL=Ejercicio_03.js.map