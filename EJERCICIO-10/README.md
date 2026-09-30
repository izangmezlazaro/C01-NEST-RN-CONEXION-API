# Ejercicio 10 - Likes

### Qué he aprendido
Aprendí a usar el método HTTP `PATCH` para modificar solo una parte de un dato (los likes) en el backend y actualizar la interfaz con el objeto que nos devuelve el servidor.

### Respuesta a la pregunta de comprensión
**¿Por qué los likes vuelven al valor inicial cuando reiniciamos NestJS?**

Respuesta: Porque los datos están guardados en un array en la memoria RAM del servidor y no en una base de datos real, así que al reiniciar o guardar cambios en el backend la memoria se borra y vuelve a los valores que dejamos en el código.

### Qué he modificado
Creé el endpoint con `@Patch(':id/like')` en NestJS para sumar likes en el array y en la app añadí el botón de "❤️ Me gusta" para enviar la petición PATCH y actualizar el contador.

### Resultado
*Explica brevemente cómo ha quedado la interfaz.*

Sale el nombre de la mascota Toby con sus likes, y cada vez que tocas el botón de Me gusta el contador va subiendo en tiempo real en la pantalla.
