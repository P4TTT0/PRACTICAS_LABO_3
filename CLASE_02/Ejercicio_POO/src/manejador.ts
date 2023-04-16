/// <reference path = "./clases/alumno.ts" /> 
/// <reference path = "./clases/persona.ts" /> 

namespace Manejador
{
    export function crearAlumno() : void
    {
        let apellido : string = (document.getElementById("apellido") as HTMLInputElement).value;
        let nombre : string = (document.getElementById("nombre") as HTMLInputElement).value;
        let legajo : number = parseInt((document.getElementById("legajo") as HTMLInputElement).value);

        let alumno : Prueba.Alumno = new Prueba.Alumno(apellido, nombre, legajo);

        console.log(alumno.toString());
        alert(alumno.toString());
    }
}