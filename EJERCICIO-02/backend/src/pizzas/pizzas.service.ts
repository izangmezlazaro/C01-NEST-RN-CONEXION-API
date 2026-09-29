import { Injectable } from '@nestjs/common';

@Injectable()
export class PizzasService {
    private pizzas = [
        { id: 1, nombre: 'Margarita', precio: 9, emoji: '🍕' },
        { id: 2, nombre: 'Pepperoni', precio: 11, emoji: '🥓' },
        { id: 3, nombre: 'Cuatro Quesos', precio: 12.5, emoji: '🧀' }, // 👈 3ª pizza añadida
    ];

    findAll() {
        return this.pizzas;
    }
}
