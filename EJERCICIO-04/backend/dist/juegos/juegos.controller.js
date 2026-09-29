var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Controller, Get, Query } from '@nestjs/common';
import { JuegosService } from './juegos.service.js';
let JuegosController = class JuegosController {
    juegosService;
    constructor(juegosService) {
        this.juegosService = juegosService;
    }
    findAll(genero) {
        return this.juegosService.findAll(genero);
    }
};
__decorate([
    Get(),
    __param(0, Query('genero')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], JuegosController.prototype, "findAll", null);
JuegosController = __decorate([
    Controller('juegos'),
    __metadata("design:paramtypes", [JuegosService])
], JuegosController);
export { JuegosController };
//# sourceMappingURL=juegos.controller.js.map