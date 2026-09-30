# Ejercicio 11 - Mini tienda

### Qué he aprendido
Aprendí a enviar datos nuevos al backend usando el método `POST` con `JSON.stringify()`, y a recibirlos en NestJS usando el decorador `@Body()` para meterlos en el array de datos.

### Respuesta a la pregunta de comprensión
**¿Qué recorrido realiza el objeto hasta llegar a `@Body()`?**

Respuesta: Se escriben los datos en los inputs del móvil, se empaquetan en un objeto y se pasan a JSON con `JSON.stringify()`, viajan en el body de la petición POST con cabecera `application/json`, NestJS lo recibe, lo parsea y se lo inyecta al parámetro anotado con `@Body()`.

### Qué he modificado
Añadí los inputs de nombre y precio con su botón de añadir en la app, la lógica POST en NestJS y la función para recargar la lista automáticamente tras crear un nuevo producto.

### Resultado
*Explica brevemente cómo ha quedado la interfaz.*

Tienes un formulario arriba para meter nombre y precio, pulsas el botón de añadir y el nuevo producto se añade al instante abajo en la lista.
