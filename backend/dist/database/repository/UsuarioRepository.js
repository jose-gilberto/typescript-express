"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Usuario_1 = require("../../app/models/Usuario");
class UsuarioRepository {
    getRepository() {
        return typeorm_1.getManager().getRepository(Usuario_1.Usuario);
    }
}
exports.UsuarioRepository = UsuarioRepository;
//# sourceMappingURL=UsuarioRepository.js.map