/// <reference path = "./persona.ts" /> 

namespace Prueba
{
    export class Alumno extends Persona
    {
        //ATRIBUTOS PROTECTED
        protected legajo : number;

        //PROPIEDADES PUBLICAS
        public get Legajo() : number { return this.legajo; }
        public set Legajo(value : number) { this.legajo = value; }

        //CONSTURCTOR
        public constructor(apellido : string, nombre : string, legajo : number)
        {
            super(apellido, nombre);
            this.legajo = legajo;
        }

        //METODO DE ISNTANCIA
        public override toString(): string 
        {
            return `Apellido: ${this.apellido}\nNombre: ${this.nombre}\nLegajo: ${this.legajo}`;
        }
    }
}