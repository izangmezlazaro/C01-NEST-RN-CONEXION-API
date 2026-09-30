# Ejercicio 09 - Busca superhéroe

### Qué he aprendido
Aprendí a montar URLs dinámicas en React Native cogiendo lo que escribe el usuario en un `TextInput` y pasándoselo al endpoint con Path Param de NestJS.

### Respuesta a la pregunta de comprensión
**Sigue el valor id desde React Native hasta `@Param('id')`. ¿Por dónde pasa?**

Respuesta: El usuario lo escribe en el `TextInput`, se guarda en el estado `id`, al darle al botón buscar se concatena a la URL con `fetch`, viaja por HTTP como `/heroes/2`, NestJS lo detecta con `@Get(':id')` y se lo inyecta al `@Param('id')` del controlador.

### Qué he modificado
Añadí el campo de texto numérico para meter el ID, el botón de buscar y la tarjeta con los datos de nombre, poder y universo del héroe encontrado.

### Resultado
*Explica brevemente cómo ha quedado la interfaz.*

Pones un número de ID en el recuadro, le das a Buscar y debajo aparece una tarjeta con los datos completos y el universo del superhéroe encontrado.
