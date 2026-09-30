# Ejercicio 01 - Hello Backend

### Qué he aprendido
Aprendí a crear un endpoint básico en NestJS usando `@Controller` y `@Get`, y a devolver un objeto simple que el framework convierte automáticamente a formato JSON.

### Respuesta a la pregunta de comprensión
**¿Qué función cumple `@Get()` en este Controller?**

Respuesta: Cumple la función de indicarle a NestJS que ese método (`saludar()`) se tiene que ejecutar cuando llegue una petición HTTP GET a la ruta del controlador (`/hola`), sirviendo de puerta de entrada para peticiones de lectura.

### Qué he modificado
El mensaje de saludo para personalizarlo y he añadido la clave `curso` con el valor `'DAM'` dentro del objeto que devuelve el controlador.

### Resultado
*Explica brevemente cómo ha quedado el endpoint.*

Al abrir en el navegador o en Thunder Client la URL `http://localhost:3000/hola`, devuelve un JSON con el mensaje modificado y el curso DAM con código de estado 200 OK.
