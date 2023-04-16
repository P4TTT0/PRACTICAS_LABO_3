"use strict";
var miNameSpace;
(function (miNameSpace) {
    class clase {
        //GETTER
        GetNumero() {
            return this.numero;
        }
        //SETTER
        setNumero(numero) {
            this.numero = numero;
        }
        //PROPIEDAD GETTER
        get Numero() {
            return this.numero;
        }
        //PROPIEDAD SETTER
        set Numero(value) {
            this.numero = value;
        }
        //CONSTRUCTOR
        constructor(cadena, numero) {
            this.cadena = "";
            this.numero = 0;
            this.cadena = cadena;
            this.numero = numero;
        }
        //FUNCION
        retornarCadena(cadena) {
            return cadena;
        }
    }
    miNameSpace.clase = clase;
})(miNameSpace || (miNameSpace = {}));
//# sourceMappingURL=clases.js.map