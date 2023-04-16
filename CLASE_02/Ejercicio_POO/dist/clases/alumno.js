"use strict";
/// <reference path = "./persona.ts" /> 
var Prueba;
(function (Prueba) {
    class Alumno extends Prueba.Persona {
        //PROPIEDADES PUBLICAS
        get Legajo() { return this.legajo; }
        set Legajo(value) { this.legajo = value; }
        //CONSTURCTOR
        constructor(apellido, nombre, legajo) {
            super(apellido, nombre);
            this.legajo = legajo;
        }
        //METODO DE ISNTANCIA
        toString() {
            return `Apellido: ${this.apellido}\nNombre: ${this.nombre}\nLegajo: ${this.legajo}`;
        }
    }
    Prueba.Alumno = Alumno;
})(Prueba || (Prueba = {}));
//# sourceMappingURL=alumno.js.map