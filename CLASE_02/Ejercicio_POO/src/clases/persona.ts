namespace Prueba
{
    export class Persona
    {
        //ATRIBUTOS PROTECTED
        protected apellido : string;
        protected nombre : string;

        //PROPIEDADES PUBLICAS
        public get Apellido() : string { return this.apellido; }
        public set Apellido(value : string) { this.apellido = value; }
        public get Nombre() : string { return this.nombre; }
        public set Nombre(value : string ) { this.nombre = value; } 

        //CONSTRUCTOR
        public constructor(apellido : string, nombre : string)
        {
            this.apellido = apellido;
            this.nombre = nombre;
        }

        //METODO DE INSTANCIA
        public toString() : string
        {
            return `Apellido: ${this.apellido}\nNombre: ${this.nombre}`;
        }
    }
}