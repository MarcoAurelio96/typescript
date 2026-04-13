import { calcularMedia, calcularMediana, filtrarAtipicos } from "./math-utils";

const misDatos = [10, 20, 30, 40, 50, 1000]; // El 1000 es un atípico
const listaVacia: number[] = [];

// Probar Media
console.log("--- Test Media ---");
console.log("Media normal:", calcularMedia(misDatos));
console.log("Media vacía:", calcularMedia(listaVacia));

// Probar Mediana
console.log("\n--- Test Mediana ---");
console.log("Mediana:", calcularMediana(misDatos));

// Probar Filtro
console.log("\n--- Test Filtro ---");
const limite = 100;
const datosLimpios = filtrarAtipicos(misDatos, limite);
console.log(`Datos menores a ${limite}:`, datosLimpios);