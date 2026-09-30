# Ejercicio 07 - Carga automática

### Qué he aprendido
Aprendí a usar el hook `useEffect` con corchetes vacíos `[]` para que la app haga la petición HTTP sola nada más abrirse la pantalla, sin que el usuario tenga que tocar ningún botón.

### Respuesta a la pregunta de comprensión
**¿Qué diferencia hay entre llamar `cargarMensaje` desde un botón y desde `useEffect`?**

Respuesta: Desde un botón tienes que pulsar tú físicamente para que se cargue la información, mientras que con `useEffect` se ejecuta automáticamente nada más renderizarse la pantalla al iniciar la app.

### Qué he modificado
Añadí el `useEffect` para la carga inicial, puse un estado inicial de `'Cargando…'` y mantuve un botón para recargar manualmente la conexión.

### Resultado
*Explica brevemente cómo ha quedado la interfaz.*

Nada más entrar sale durante un instante "Cargando…" y se pone solo en verde con "🟢 Backend disponible", teniendo además el botón de recargar por si queremos refrescar.
