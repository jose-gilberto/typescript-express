"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const bcrypt = require("bcryptjs");
let Usuario = class Usuario {
    constructor(obj) {
        if (obj != null) {
            this.nome = obj.nome;
            this.email = obj.email;
            this.senha = obj.senha;
        }
    }
    criptografarSenha() {
        const hash = bcrypt.hashSync(this.senha, 10);
        this.senha = hash;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("increment", { type: "bigint" }),
    __metadata("design:type", Number)
], Usuario.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 155 }),
    __metadata("design:type", String)
], Usuario.prototype, "nome", void 0);
__decorate([
    typeorm_1.Column({ unique: true }),
    __metadata("design:type", String)
], Usuario.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({ select: false }),
    __metadata("design:type", String)
], Usuario.prototype, "senha", void 0);
__decorate([
    typeorm_1.Column({ select: false, nullable: true }),
    __metadata("design:type", String)
], Usuario.prototype, "token", void 0);
__decorate([
    typeorm_1.Column({ select: false, name: 'token_tempo', type: 'timestamptz', nullable: true }),
    __metadata("design:type", Date)
], Usuario.prototype, "tokenTempo", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Usuario.prototype, "criptografarSenha", null);
Usuario = __decorate([
    typeorm_1.Entity({ name: "usuarios" }),
    __metadata("design:paramtypes", [Object])
], Usuario);
exports.Usuario = Usuario;
//# sourceMappingURL=Usuario.js.map