import * as express from 'express';
import * as jwt from 'jsonwebtoken';

import { UsuarioRepo } from '../../database/repository/UsuarioRepository';
import { authConfig } from '../../config/authConfig';

const router = express.Router();

function generateToken(params = {}) {
    return jwt.sign({ params }, authConfig.secret ,{
        expiresIn: 5400
    });
}

router.post('/registrar', async (req, res) => {
    const { email } = req.body;
    let usuarioRepo = new UsuarioRepo();

    try {
        if (await usuarioRepo.listarPorParametro({ email })) {
            return res.status(400)
                    .json({
                        mensagem: "Erro ao cadastrar usuário!",
                        erro: "Já existe um usuário com este email!"
                    })
        }
        // refatorar o retorno do usuário
        let usuarioId = await usuarioRepo.adicionarUsuario(req.body);
        let usuario = await usuarioRepo.listarPorParametro(usuarioId.identifiers[0]);

        return res.status(200).send({
            usuario,
            token: generateToken(usuarioId.identifiers[0])
        });        
    } catch (error) {
        res.status(500)
            .json({
                mensagem: 'Ops! Ocorreu um erro, tente novamente.',
                erro: error
            })
    }
});

module.exports = app => app.use('/auth', router);