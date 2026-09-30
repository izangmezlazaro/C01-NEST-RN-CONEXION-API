# Ejercicio 05 - Mi primera conexión

### Qué he aprendido
Aprendí a conectar la app de React Native con el backend de NestJS usando `fetch()` con `async/await`, y a configurar la IP local de mi ordenador para que el móvil pueda comunicarse con el servidor.

### Respuesta a la pregunta de comprensión
**¿Por qué el móvil necesita conocer la IP del equipo donde se ejecuta NestJS?**

Respuesta: Porque si ponemos `localhost` en el móvil, este se buscaría a sí mismo y no encontraría nada. Necesita la IP de la red local para saber a qué máquina de la red tiene que enviar la petición HTTP.

### Qué he modificado
Puse la IP local de mi máquina en la constante `API_URL`, vinculé la función `cargarMensaje` al botón y mostré los datos recibidos por la consola con `console.log`.

### Resultado
*Explica brevemente cómo ha quedado la interfaz.*

Ha quedado una pantalla sencilla con un botón que al pulsarlo hace la petición a NestJS y muestra el mensaje recibido en los logs de la consola.
