import { getManager } from 'typeorm';

import { Usuario } from '../../app/models/Usuario';

export class UsuarioRepo {

    listarTodosUsuarios() {
        return getManager().getRepository(Usuario).find();
    }

    listarPorParametro(parametro) {
        return getManager().getRepository(Usuario).findOne(parametro);
    }

    adicionarUsuario(usuario) {
        return getManager().getRepository(Usuario).insert(usuario);
    }

}