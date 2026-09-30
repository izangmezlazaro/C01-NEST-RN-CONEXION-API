# Ejercicio 06 - Estado de conexión

### Qué he aprendido
Aprendí a usar el hook `useState` para guardar los datos que llegan del backend y hacer que la interfaz de React Native se actualice automáticamente al cambiar el estado.

### Respuesta a la pregunta de comprensión
**¿Qué aporta `useState` frente a una variable normal?**

Respuesta: Que con una variable normal React no se entera de los cambios y la pantalla no se actualiza, mientras que `useState` avisa a React para que vuelva a pintar la interfaz con el nuevo valor en cuanto llamamos a `setMensaje`.

### Qué he modificado
Puse el estado inicial en rojo con `'🔴 Sin conectar'` y lo cambié para que se ponga en verde con `'🟢 '` y el texto del backend al pulsar el botón.

### Resultado
*Explica brevemente cómo ha quedado la interfaz.*

La pantalla empieza mostrando el texto en rojo sin conectar, y al pulsar el botón de conectar cambia al instante a verde mostrando el mensaje del servidor.
