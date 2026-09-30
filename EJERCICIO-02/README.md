# EJERCICIO 02 · API de pizzas

## 1. Qué he aprendido
He aprendido a separar las responsabilidades en el backend separando la entrada HTTP de la lógica de negocio y los datos. Para ello, he utilizado un **Service** anotado con `@Injectable()` que gestiona un array en memoria con las pizzas, y he inyectado este servicio en el **Controller** para que este último solo se encargue de recibir la petición `GET /pizzas` y delegar en el servicio la obtención de los datos.

---

## 2. Respuesta a la pregunta de comprensión
> **¿Por qué colocamos el array en el Service y no en el Controller?**

Por el principio de separación de responsabilidades (*Single Responsibility Principle*). El Controller debe ocuparse exclusivamente de la capa de transporte HTTP (recibir peticiones, leer cabeceras o parámetros y devolver la respuesta), mientras que el Service es quien debe encargarse de la lógica de negocio y de manipular los datos. Si más adelante cambiamos el array en memoria por una base de datos real (PostgreSQL, MongoDB, etc.), solo modificaremos el Service y el Controller seguirá funcionando igual sin enterarse del cambio.

---

## 3. Qué he modificado
En el archivo `backend/src/pizzas/pizzas.service.ts`, he añadido una tercera pizza al array en memoria con su identificador, nombre, emoji y precio correspondiente:

```typescript
@Injectable()
export class PizzasService {
  private pizzas = [
    { id: 1, nombre: 'Margarita', precio: 9, emoji: '🍕' },
    { id: 2, nombre: 'Pepperoni', precio: 11, emoji: '🍕' },
    { id: 3, nombre: 'Cuatro Quesos', precio: 12.5, emoji: '🧀' },
  ];

  findAll() {
    return this.pizzas;
  }
}
```

---

## 4. Resultado
Al hacer una petición `GET` a `http://localhost:3000/pizzas`, el endpoint nos devuelve la lista completa con las tres pizzas en formato JSON:

```json
[
  { "id": 1, "nombre": "Margarita", "precio": 9, "emoji": "🍕" },
  { "id": 2, "nombre": "Pepperoni", "precio": 11, "emoji": "🍕" },
  { "id": 3, "nombre": "Cuatro Quesos", "precio": 12.5, "emoji": "🧀" }
]
```
