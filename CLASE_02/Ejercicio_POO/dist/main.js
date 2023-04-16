"use strict";
/// <reference path = "./clases/persona.ts" /> 
/// <reference path = "./clases/alumno.ts" /> 
var TestPrueba;
(function (TestPrueba) {
    let listaAlumnos = [];
    listaAlumnos.push(new Prueba.Alumno("Patricio", "Perez Cardenal", 9901));
    listaAlumnos.push(new Prueba.Alumno("Florencia", "Acevedo", 3911));
    listaAlumnos.push(new Prueba.Alumno("Santiago", "Grosso", 9422));
    listaAlumnos.push(new Prueba.Alumno("Agustin", "Sbernini", 4211));
    listaAlumnos.forEach(alumno => {
        alumno.toString();
    });
})(TestPrueba || (TestPrueba = {}));
//# sourceMappingURL=main.js.map