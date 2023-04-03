"use strict";
const miNombre = "Patricio";
const miApeliido = "Perez Cardenal";
function formatoNombre(nombre, apellido) {
    let auxNombre = "";
    for (let i = 0; i < nombre.length; i++) {
        if (i > 0) {
            auxNombre += nombre[i].toLowerCase();
        }
        else {
            auxNombre = nombre[0].toUpperCase();
        }
    }
    console.log(`${auxNombre}, ${apellido.toUpperCase()}`);
}
formatoNombre(miNombre, miApeliido);
formatoNombre("juan", "perez");
formatoNombre("JUAN", "PERez");
//# sourceMappingURL=Ejercicio_05.js.map