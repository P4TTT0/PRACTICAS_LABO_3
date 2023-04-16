"use strict";
/// <reference path = "./clases/alumno.ts" /> 
/// <reference path = "./clases/persona.ts" /> 
var Manejador;
(function (Manejador) {
    function crearAlumno() {
        let apellido = document.getElementById("apellido").value;
        let nombre = document.getElementById("nombre").value;
        let legajo = parseInt(document.getElementById("legajo").value);
        let alumno = new Prueba.Alumno(apellido, nombre, legajo);
        console.log(alumno.toString());
        alert(alumno.toString());
    }
    Manejador.crearAlumno = crearAlumno;
})(Manejador || (Manejador = {}));
//# sourceMappingURL=manejador.js.map