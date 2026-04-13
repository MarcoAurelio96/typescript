import { Estudiante, EstadoMatricula } from "./domain/types";

function generarReporte(estudiante: Estudiante): string {
    const estado = estudiante.estado;

    switch (estado.tipo) {
        case "ACTIVA":
            return `[ACTIVA] ${estudiante.nombre} está inscrito en: ${estado.asignaturas.join(", ")}.`;

        case "SUSPENDIDA":
            return `[ALERTA] ${estudiante.nombre} tiene la matrícula suspendida. Motivo: ${estado.motivo}.`;

        case "FINALIZADA":
            return `[ÉXITO] ${estudiante.nombre} ha finalizado. Nota media: ${estado.notaMedia}.`;
        
        default:
            return "Estado no reconocido";

    }
}