function calcularMedia(datos: number[]): number | null{
    if(datos.length === 0) return null;

    const suma = datos.reduce((acumulador, valor) => acumulador + valor, 0);
    return suma / datos.length;
}

function calcularMediana(datos: number[]): number | null{
    if(datos.length === 0) return null;

    const ordenados = [...datos].sort((a, b) => a - b);
    const mitad = Math.floor(ordenados.length / 2);

    if (ordenados.length % 2 === 0){
        return (ordenados[mitad - 1] + ordenados[mitad]) / 2;
    }
    return ordenados[mitad];
}

function filtrarAtipicos(datos: number[], limite: number): number[]{
    if(datos.length === 0) return [];

    return datos.filter(num => num <= limite);
}

export { calcularMedia, calcularMediana, filtrarAtipicos };