export const MARCAS = [
    {id: 1, nombre: "Europeo"},
    {id: 2, nombre: "Americano"},
    {id: 3, nombre: "Asiático"},
]
//Me devuelve el año actual, que consideramos como el máximo de la lista
const YEARMAX = new Date().getFullYear();
//Función que devolverá arreglo con los 20 años anteriores
export const YEARS = Array.from(new Array(20), (valor,index) => YEARMAX - index);

export const PLANES = [
    { id: 1, nombre: "Básico"},
    { id: 2, nombre: "Completo"}
]