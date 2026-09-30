# Ejercicio 03 - Busca mascota

### Qué he aprendido
Aprendí a usar parámetros de ruta (Path Params) con `@Get(':id')` y `@Param('id')`, y a buscar elementos concretos en un array con el método `.find()` de JavaScript.

### Respuesta a la pregunta de comprensión
**¿Por qué convertimos id con `Number(id)`?**

Respuesta: Porque todo lo que viene por la URL llega siempre como un string (texto). Como en nuestro array los `id` son números, si no usamos `Number()` la comparación daría falso al buscar con `===` y no encontraría nunca la mascota.

### Qué he modificado
Añadí una nueva mascota al array del Service y probé a consultar varios IDs por la ruta del endpoint.

### Resultado
*Explica brevemente cómo ha quedado el endpoint.*

Si pones en la URL el ID de una mascota existente (por ejemplo `/mascotas/2`) te devuelve sus datos en JSON, y si pones un ID que no existe no da error y devuelve vacío con código 200.
