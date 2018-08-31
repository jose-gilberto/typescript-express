import * as express from 'express';

import { UsuarioRepository } from '../../database/repository/UsuarioRepository';

const router = express.Router();

router.get('/', (req, res) => {
    let usuarioRepository: UsuarioRepository = new UsuarioRepository();
    console.log('Requisição listarUsuarios ==> GET');

    usuarioRepository.getRepository().find().then((data: any) => {
        console.log(data);
        res.json(data);
    });
});

module.exports = app => app.use('/usuario', router);