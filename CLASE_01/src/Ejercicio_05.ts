const miNombre: "Patricio" = "Patricio";
const miApeliido: "Perez Cardenal" = "Perez Cardenal";

function formatoNombre(nombre: string, apellido: string)
{
    let auxNombre: string = "";

    for(let i = 0; i < nombre.length; i++)
    {

        if (i > 0)
        {
            auxNombre += nombre[i].toLowerCase();
        }
        else
        {
            auxNombre = nombre[0].toUpperCase();
        }
    }
    console.log(`${auxNombre}, ${apellido.toUpperCase()}`);

}

formatoNombre(miNombre, miApeliido);
formatoNombre("juan", "perez");
formatoNombre("JUAN", "PERez");
