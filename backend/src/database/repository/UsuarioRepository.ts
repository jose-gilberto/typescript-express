import { getManager, getConnection } from 'typeorm';

import { Usuario } from '../../app/models/Usuario';

export class UsuarioRepository {

    getRepository() {
        return getManager().getRepository(Usuario);
    }
}