# 📘 Guía Completa: Novedades, Conceptos y Puesta en Marcha (C01)

Esta guía recopila todo lo aprendido a lo largo del **Cuaderno 01 (C01)**, explicando **ejercicio a ejercicio qué novedad se introduce y por qué**, junto con una **guía paso a paso para inicializar y ejecutar cualquier ejercicio**.

---

## 🛠️ 1. Guía de Inicialización y Puesta en Marcha

Cada carpeta `EJERCICIO-XX` funciona como una **isla independiente** (contiene su propio proyecto de backend en NestJS y, a partir del ejercicio 05, su propio frontend en Expo/React Native).

### 📋 Prerrequisitos
- Tener instalado **Node.js** (versión LTS recomendada).
- Tener instalado el CLI de NestJS globalmente:
  ```bash
  npm install -g @nestjs/cli
  ```
- En el móvil: tener instalada la app **Expo Go** (si vas a probar en un dispositivo físico) o un emulador (Android Studio / Xcode).

---

### 🖥️ Paso A: Arrancar el Backend (NestJS)

1. Abre una terminal y navega hasta la carpeta `backend` del ejercicio que quieras probar:
   ```bash
   cd EJERCICIO-XX/backend
   ```
2. Instala las dependencias (solo la primera vez o si te descargas el repo limpio):
   ```bash
   npm install
   ```
3. Arranca el servidor en modo desarrollo (con recarga en caliente):
   ```bash
   npm run start:dev
   ```
4. El servidor se iniciará por defecto en `http://localhost:3000`. Puedes verificar que funciona abriendo la ruta correspondiente en tu navegador o Thunder Client (por ejemplo, `http://localhost:3000/hola` o `http://localhost:3000/productos`).

---

### 🌐 Paso B: Obtener tu IP Local (Obligatorio para el móvil)

Para que el móvil pueda comunicarse con tu ordenador, ambos deben estar conectados a la **misma red Wi-Fi** y la app debe apuntar a tu IP local (no uses `localhost` en el móvil).

- **En Windows:** Abre la consola y escribe:
  ```powershell
  ipconfig
  ```
  Busca la línea **"Dirección IPv4"** de tu adaptador Wi-Fi (suele ser algo como `192.168.1.XX` o `10.0.X.X`).

---

### 📱 Paso C: Arrancar el Frontend (React Native / Expo)

1. Abre **otra terminal distinta** (dejando la del backend abierta) y ve a la carpeta `frontend`:
   ```bash
   cd EJERCICIO-XX/frontend
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Abre el archivo `App.tsx` y asegúrate de que la constante `API_URL` tiene tu IP local:
   ```typescript
   const API_URL = 'http://192.168.1.XX:3000'; // Pon tu IP real aquí
   ```
4. Arranca Expo:
   ```bash
   npx expo start
   ```
5. Escanea el código QR generado desde la cámara (en iOS) o desde la app **Expo Go** (en Android).

---

## 🧠 2. Desglose Ejercicio a Ejercicio: Qué es cada cosa nueva y Por qué

A continuación se detalla qué concepto nuevo entra en cada ejercicio, la sintaxis que se incorpora y la razón de su uso.

---

### 🟢 EJERCICIO 01 · Hello Backend
- **Novedad añadida:** `@Controller('hola')` y `@Get()`.
- **¿Qué es?** 
  - `@Controller('hola')`: Es un decorador de NestJS que define una clase como controlador y le asigna el prefijo de ruta `/hola`.
  - `@Get()`: Decorador de método que marca la función para responder a peticiones HTTP GET.
- **¿Por qué se añade?**
  Para entender el concepto de **endpoint**. Un servidor necesita saber qué código ejecutar cuando un cliente le pide algo mediante una URL y un verbo HTTP.

---

### 🟢 EJERCICIO 02 · API de pizzas
- **Novedad añadida:** `@Injectable()`, **Service** e **Inyección de dependencias**.
- **¿Qué es?**
  - Un **Service** es una clase con la lógica de negocio y el acceso a los datos (en este caso, un array temporal `pizzas = [...]`).
  - Se inyecta en el constructor del Controller: `constructor(private readonly pizzasService: PizzasService) {}`.
- **¿Por qué se añade?**
  Por **separación de responsabilidades**. El controlador no debe encargarse de almacenar ni manipular datos, solo de atender HTTP. Si mañana cambiamos el array por una base de datos real (PostgreSQL, MongoDB), solo modificaremos el Service y el Controller seguirá intacto.

---

### 🟢 EJERCICIO 03 · Busca mascota
- **Novedad añadida:** **Path Parameters** con `@Get(':id')` y `@Param('id')`, junto con `.find()`.
- **¿Qué es?**
  - `@Get(':id')`: El segmento con dos puntos `:` indica que esa parte de la URL es variable.
  - `@Param('id') id: string`: Extrae ese valor de la ruta como texto.
  - `Number(id)`: Conversión explícita a número.
  - `.find(m => m.id === id)`: Método de JavaScript para buscar un único elemento.
- **¿Por qué se añade?**
  Para recuperar **un recurso específico**. El identificador forma parte de la propia ruta (`/mascotas/2`). Se usa `Number()` porque los datos de la URL siempre llegan como `string` y el array almacena `id` numéricos.

---

### 🟢 EJERCICIO 04 · Filtra videojuegos
- **Novedad añadida:** **Query Parameters** con `@Query('genero')` y `.filter()`.
- **¿Qué es?**
  - `@Query('genero') genero?: string`: Captura parámetros opcionales enviados tras el signo `?` en la URL (ej: `/juegos?genero=aventura`).
  - `.filter()`: Filtra la colección devolviendo todos los elementos que cumplan la condición.
- **¿Por qué se añade?**
  Para diferenciar **Path Params** (identificar un recurso concreto) de **Query Params** (filtros, búsquedas o paginación sobre una lista). Si no se pasa el parámetro `genero`, el endpoint devuelve la lista entera sin romper nada.

---

### 🟢 EJERCICIO 05 · Mi primera conexión
- **Novedad añadida:** `fetch()` asíncrono con `async/await` en React Native y configuración de `API_URL`.
- **¿Qué es?**
  - `fetch(URL)`: Función estándar para realizar peticiones HTTP de red.
  - `await r.json()`: Desempaqueta la respuesta del servidor convirtiendo el texto JSON en un objeto JavaScript utilizable.
- **¿Por qué se añade?**
  Es el puente entre el mundo móvil y el backend. Permite que la app móvil solicite datos remotos al servidor NestJS a través de la red local.

---

### 🟢 EJERCICIO 06 · Estado de conexión
- **Novedad añadida:** Hook **`useState`** de React.
- **¿Qué es?**
  - `const [mensaje, setMensaje] = useState('🔴 Sin conectar');`
  - `mensaje`: variable con el valor actual del estado.
  - `setMensaje`: función actualizadora que modifica el valor y notifica a React.
- **¿Por qué se añade?**
  Las variables normales de JS no provocan que React vuelva a dibujar la pantalla. Con `useState`, al recibir la respuesta del backend y llamar a `setMensaje('🟢 ...')`, React detecta el cambio y repinta (*re-render*) la interfaz al instante.

---

### 🟢 EJERCICIO 07 · Carga automática
- **Novedad añadida:** Hook **`useEffect`** con array de dependencias vacío `[]`.
- **¿Qué es?**
  - `useEffect(() => { cargarMensaje(); }, []);`
- **¿Por qué se añade?**
  Hasta ahora las peticiones requerían que el usuario pulsara un botón. Con `useEffect` y `[]`, la petición se lanza **automáticamente en cuanto el componente se monta** (cuando la pantalla aparece por primera vez), que es el comportamiento estándar para cargar datos iniciales.

---

### 🟢 EJERCICIO 08 · Menú del restaurante
- **Novedad añadida:** Componente **`FlatList`**, `keyExtractor` y `renderItem`.
- **¿Qué es?**
  - `FlatList`: Componente nativo de React Native altamente optimizado para renderizar listas y colecciones.
  - `data={productos}`: El array de objetos guardado en el estado.
  - `keyExtractor={(item) => String(item.id)}`: Le da una clave única e irrepetible a cada fila.
  - `renderItem={({ item }) => (...) }`: Función que define la plantilla visual (tarjeta/card) para cada elemento.
- **¿Por qué se añade?**
  El backend ahora devuelve listas de objetos. `FlatList` permite pintarlas eficientemente con scroll fluido y estilos tipo tarjeta.

---

### 🟢 EJERCICIO 09 · Busca superhéroe
- **Novedad añadida:** Componente `<TextInput>` vinculado a **URL dinámica**.
- **¿Qué es?**
  - Un campo de texto donde el usuario escribe un ID, que se guarda en el estado local y se concatena dinámicamente: `fetch(API_URL + '/heroes/' + id)`.
- **¿Por qué se añade?**
  Para conectar un Path Param del backend (`@Get(':id')`) con una acción directa que nace del usuario en la pantalla del móvil.

---

### 🟢 EJERCICIO 10 · Likes
- **Novedad añadida:** Método HTTP **`PATCH`** (`@Patch(':id/like')`).
- **¿Qué es?**
  - `fetch(URL, { method: 'PATCH' })`: Petición HTTP pensada para **modificaciones parciales** de un recurso existente (aumentar el contador de likes de un elemento concreto).
- **¿Por qué se añade?**
  Hasta ahora solo hacíamos peticiones de lectura (`GET`). `PATCH` nos enseña a modificar datos en el servidor desde la app y actualizar la interfaz con el objeto retornado tras la mutación.

---

### 🟢 EJERCICIO 11 · Mini tienda
- **Novedad añadida:** Método HTTP **`POST`**, encabezados `'Content-Type': 'application/json'`, `JSON.stringify()` y decorador **`@Body()`**.
- **¿Qué es?**
  - `POST`: Verbo HTTP para **crear nuevos recursos**.
  - `JSON.stringify({...})`: Convierte el objeto de JavaScript a formato texto JSON para enviarlo dentro del cuerpo (*body*) de la petición.
  - `@Body()` en NestJS: Extrae y parsea el cuerpo de la petición HTTP directamente como parámetro en el controlador.
- **¿Por qué se añade?**
  Para permitir la creación de datos desde el móvil (añadir nuevos productos al array del servidor) y refrescar la lista visual con `cargarProductos()` inmediatamente después de la creación.

---

### 🟢 EJERCICIO 12 · Creature Lab
- **Novedad añadida:** **Integración Full Stack Completa** (GET colección + GET por ID + PATCH likes + FlatList horizontal + Hero Card).
- **¿Qué es?**
  - Unifica en una sola app todo lo visto: `useEffect` para carga inicial, lista horizontal con `FlatList` y `Pressable`, visualización en detalle de la criatura seleccionada y botón de interacción con `PATCH`.
- **¿Por qué se añade?**
  Para consolidar el ciclo completo sin añadir complejidad extra: entender cómo un sistema completo se compone de pequeñas piezas conectadas entre sí.

---

## 🔄 3. El Viaje Completo del Dato (Resumen Mental)

```text
[ Pantalla Móvil (React Native) ]
       │
       │  1. Evento de usuario o useEffect
       ▼
[ fetch(URL, { method, headers, body }) ]
       │
       │  2. Petición HTTP / JSON por la Red
       ▼
[ Controller (NestJS) ] ───▶ Extrae datos con @Param, @Query, @Body
       │
       │  3. Inyección y delegación
       ▼
[ Service (NestJS) ] ──────▶ Aplica lógica de negocio y consulta/muta el array
       │
       │  4. Retorna resultado
       ▼
[ Respuesta HTTP (JSON 200/201) ]
       │
       │  5. Regreso por la Red
       ▼
[ await respuesta.json() ]
       │
       │  6. setEstado(datos)
       ▼
[ useState ] ──────────────▶ Notifica cambio a React
       │
       │  7. Re-render reactivo
       ▼
[ FlatList / Text / UI ] ──▶ Usuario ve la pantalla actualizada
```
