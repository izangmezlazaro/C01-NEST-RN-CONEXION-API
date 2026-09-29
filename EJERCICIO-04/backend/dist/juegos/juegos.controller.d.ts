import { JuegosService } from './juegos.service.js';
export declare class JuegosController {
    private readonly juegosService;
    constructor(juegosService: JuegosService);
    findAll(genero?: string): {
        id: number;
        titulo: string;
        genero: string;
        precio: number;
    }[];
}
