var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@nestjs/common';
let JuegosService = class JuegosService {
    juegos = [
        { id: 1, titulo: 'The Legend of Zelda', genero: 'aventura', precio: 60 },
        { id: 2, titulo: 'Elden Ring', genero: 'rpg', precio: 50 },
        { id: 3, titulo: 'Super Mario Odyssey', genero: 'plataformas', precio: 45 },
        { id: 4, titulo: 'Uncharted 4', genero: 'aventura', precio: 30 },
    ];
    findAll(genero) {
        if (!genero)
            return this.juegos;
        return this.juegos.filter((j) => j.genero.toLowerCase() === genero.toLowerCase());
    }
};
JuegosService = __decorate([
    Injectable()
], JuegosService);
export { JuegosService };
//# sourceMappingURL=juegos.service.js.map