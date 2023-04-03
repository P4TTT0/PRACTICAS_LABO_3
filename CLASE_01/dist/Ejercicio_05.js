"use strict";
const miNombre = "Patricio";
const miApeliido = "Perez Cardenal";
function formatoNombre(nombre, apellido) {
    let auxNombre = nombre[0].toUpperCase() + nombre.slice(1).toLowerCase();
    console.log(`${auxNombre}, ${apellido.toUpperCase()}`);
}
formatoNombre(miNombre, miApeliido);
formatoNombre("juan", "perez");
formatoNombre("JUAN", "PERez");
//# sourceMappingURL=Ejercicio_05.js.map