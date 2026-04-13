ARQUITECTURA DEL SISTEMA

Interfaces vs Types: Usamos interface para Estudiante porque describe un objeto con propiedades. Usamos type para EstadoMatricula porque es una unión (un "esto o aquello"), algo que las interfaces no pueden hacer por sí solas.

Genéricos: Usamos <T> en la API para evitar repetir código. Es decir, la función obtenerRecurso nos sirve para traer estudiantes, profesores o asignaturas sin cambiar sus tipos.

Readonly: Usamos readonly id para asegurar que el identificador de la base de datos no sea modificado accidentalmente.