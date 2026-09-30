# Ejercicio 08 - Menú del restaurante

### Qué he aprendido
Aprendí a mostrar un array de productos del backend en React Native usando `FlatList`, configurando `keyExtractor` y `renderItem` para maquetar tarjetas de forma eficiente.

### Respuesta a la pregunta de comprensión
**¿Qué relación existe entre el array del Service y `data={productos}`?**

Respuesta: El array del Service es el que tiene los datos en el servidor, que viajan por HTTP como JSON hasta la app, se guardan en el estado `productos` con `setProductos` y se le pasan a la `FlatList` en la propiedad `data` para que los pinte en pantalla.

### Qué he modificado
Añadí un cuarto producto en el Service del backend y maqueté los elementos en la app móvil con estilos de tarjeta, fondo azul suave y bordes redondeados.

### Resultado
*Explica brevemente cómo ha quedado la interfaz.*

Ha quedado una lista vertical con tarjetas limpias y bien separadas donde cada producto muestra su emoji, su nombre y su precio en euros.
