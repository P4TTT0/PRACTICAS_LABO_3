"use strict";
var Prueba;
(function (Prueba) {
    class Persona {
        //PROPIEDADES PUBLICAS
        get Apellido() { return this.apellido; }
        set Apellido(value) { this.apellido = value; }
        get Nombre() { return this.nombre; }
        set Nombre(value) { this.nombre = value; }
        //CONSTRUCTOR
        constructor(apellido, nombre) {
            this.apellido = apellido;
            this.nombre = nombre;
        }
        //METODO DE INSTANCIA
        toString() {
            return `Apellido: ${this.apellido}\nNombre: ${this.nombre}`;
        }
    }
    Prueba.Persona = Persona;
})(Prueba || (Prueba = {}));
//# sourceMappingURL=persona.js.map