function parImpar(numero: number)
{
    if (numero % 2 == 0)
    {
        console.log(`El numero ${numero} es PAR`)
    }
    else
    {
        console.log(`El numero ${numero} es IMPAR`)
    }
}

parImpar(Math.floor(Math.random() * 10000));