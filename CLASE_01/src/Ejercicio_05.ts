const miNombre: "Patricio" = "Patricio";
const miApeliido: "Perez Cardenal" = "Perez Cardenal";

function formatoNombre(nombre: string, apellido: string)
{
    let auxNombre: string = nombre[0].toUpperCase() + nombre.slice(1).toLowerCase();

    console.log(`${auxNombre}, ${apellido.toUpperCase()}`);

}

formatoNombre(miNombre, miApeliido);
formatoNombre("juan", "perez");
formatoNombre("JUAN", "PERez");
