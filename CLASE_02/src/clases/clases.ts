namespace miNameSpace
{
    export class clase
    {
        public cadena : string = "";
        private numero : number = 0;

        //GETTER
        public GetNumero() : number
        {
            return this.numero;
        }

        //SETTER
        public setNumero(numero : number) : void
        {
            this.numero = numero;
        }

        //PROPIEDAD GETTER
        public get Numero() : number
        {
            return this.numero;
        }

        //PROPIEDAD SETTER
        public set Numero(value : number)
        {
            this.numero = value;
        } 

        //CONSTRUCTOR
        public constructor(cadena : string, numero : number)
        {
            this.cadena = cadena;
            this.numero = numero;
        }
        
        //FUNCION
        public retornarCadena(cadena : string) : string
        {
            return cadena;    
        }
    }
}