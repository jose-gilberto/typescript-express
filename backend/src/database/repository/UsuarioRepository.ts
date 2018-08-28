import { getManager } from 'typeorm';

import { Usuario } from '../../app/models/Usuario';

export class UsuarioRepo {

    listarTodosUsuarios() {
        return getManager().getRepository(Usuario).find();
    }

}