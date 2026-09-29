import { Injectable } from '@nestjs/common';

@Injectable()
export class JuegosService {
  private juegos = [
    { id: 1, titulo: 'The Legend of Zelda', genero: 'aventura', precio: 60 },
    { id: 2, titulo: 'Elden Ring', genero: 'rpg', precio: 50 },
    { id: 3, titulo: 'Super Mario Odyssey', genero: 'plataformas', precio: 45 },
    { id: 4, titulo: 'Uncharted 4', genero: 'aventura', precio: 30 },
  ];

  findAll(genero?: string) {
    if (!genero) return this.juegos;
    return this.juegos.filter(
      (j) => j.genero.toLowerCase() === genero.toLowerCase(),
    );
  }
}
