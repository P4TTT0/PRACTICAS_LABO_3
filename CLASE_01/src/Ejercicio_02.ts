const meses: string[] = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
meses.forEach(element => {
    console.log(`${element} - ${meses.indexOf(element) + 1}`)
});