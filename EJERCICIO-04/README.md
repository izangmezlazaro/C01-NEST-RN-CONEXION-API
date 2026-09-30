# Ejercicio 04 - Filtra videojuegos

### Qué he aprendido
Aprendí a usar Query Params con `@Query('genero')` para filtrar datos opcionalmente usando `.filter()`, diferenciándolo claramente de los parámetros de ruta.

### Respuesta a la pregunta de comprensión
**¿Cuándo usarías `/juegos/3` y cuándo `/juegos?genero=aventura`?**

Respuesta: Usaría `/juegos/3` cuando quiero traerme un único juego concreto sabiendo su ID (un recurso específico), y usaría `/juegos?genero=aventura` cuando quiero aplicar un filtro, criterio de búsqueda o paginación sobre toda la lista de juegos.

### Qué he modificado
Creé un listado con 4 videojuegos de diferentes géneros y apliqué la condición en el Service para filtrar solo si se envía el parámetro `genero`.

### Resultado
*Explica brevemente cómo ha quedado el endpoint.*

Si llamas a `/juegos` salen todos los videojuegos, pero si pones `?genero=aventura` solo te filtra y devuelve los que sean de ese género.
