import * as express from 'express';

import { UsuarioRepo } from '../../database/repository/UsuarioRepository';

const router = express.Router();

router.get('/', (req, res) => {
    let usuarioRepo: UsuarioRepo = new UsuarioRepo();
    console.log('Requisição listarUsuarios ==> GET');

    usuarioRepo.listarTodosUsuarios().then((data: any) => {
        console.log(data);
        res.json(data);
    });
});

module.exports = app => app.use('/usuario', router);