import { Injectable } from '@nestjs/common';

@Injectable()
export class MascotasService {
  private mascotas = [
    { id: 1, nombre: 'Toby', especie: 'Perro', edad: 4 },
    { id: 2, nombre: 'Luna', especie: 'Gata', edad: 2 },
    { id: 3, nombre: 'Karim', especie: 'Loro', edad: 1 },
  ];

  findAll() {
    return this.mascotas;
  }

  findOne(id: number) {
    const mascota = this.mascotas.find((m) => m.id === id);
    if (!mascota) {
      return { mensaje: `Mascota con id ${id} no encontrada` };
    }
    return mascota;
  }
}
