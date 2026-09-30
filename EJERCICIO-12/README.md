# Ejercicio 12 - Creature Lab

### Qué he aprendido
Aprendí a juntar todo lo aprendido del cuaderno en una sola app: listar con GET y FlatList, ver detalles por ID al pulsar un elemento y modificar datos con PATCH de likes en tiempo real.

### Respuesta a la pregunta de comprensión
**¿Podrías explicar el viaje completo de un dato sin mirar el código?**

Respuesta: El usuario interactúa en la app móvil, React Native lanza un `fetch` por HTTP, llega al Controller de NestJS, este llama al Service que consulta o modifica el array, el backend responde en JSON, el móvil lo guarda en el estado con `useState` y React repinta la pantalla con los nuevos datos recibidos.

### Qué he modificado
Creé la interfaz completa con carrusel horizontal de criaturas, panel principal con estadísticas de la criatura seleccionada y botón de likes conectado por PATCH para refrescar tanto el detalle como la lista.

### Resultado
*Explica brevemente cómo ha quedado la interfaz.*

Ha quedado una pantalla con un carrusel de criaturas abajo que puedes pulsar para seleccionarlas, y arriba una tarjeta grande con sus estadísticas y el botón de Me gusta que sube los likes al momento.
