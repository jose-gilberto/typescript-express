import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import { getConnection, getManager } from 'typeorm';

import { UsuarioRepository } from '../../database/repository/UsuarioRepository';
import { authConfig } from '../../config/authConfig';
import { Usuario } from '../models/Usuario';

const router = express.Router();

// criar modulo de autenticação
function generateToken(params = {}) {
    return jwt.sign({ params }, authConfig.secret ,{
        expiresIn: 5400
    });
}

router.post('/registrar', async (req, res) => {
    const { email } = req.body;
    let usuarioRepository = new UsuarioRepository();

    try {        
        if (await usuarioRepository.getRepository().findOne({ email })) {
            return res.status(400)
                    .json({
                        mensagem: "Erro ao cadastrar usuário!",
                        erro: "Já existe um usuário com este email!"
                    });
        }

        let usuario = new Usuario(req.body);

        usuario = await usuarioRepository.getRepository().save(usuario);
        usuario.senha = undefined;

        return res.status(200).json({
            usuario,
            token: generateToken(usuario.id)
        });
    } catch (error) {
        return res.status(500)
            .json({
                mensagem: 'Ops! Ocorreu um erro, tente novamente. Se o erro persistir contate o administrador.',
                erro: error
            });
    }
});

router.post('/autenticar', async (req, res) => {
    const { email, senha } = req.body;
    let usuarioRepository = new UsuarioRepository();

    const usuario = await usuarioRepository.getRepository().findOne({
        select: ["id", "nome", "senha", "email"],
        where: {
            email
        }
    });

    if (!usuario)
        return res.status(400).json({
            mensagem: "Erro ao autenticar usuário, credenciais inválidas!"
        });
    
    if (!await bcrypt.compare(senha, usuario.senha))
        return res.status(400).json({
            mensagem: "Erro ao autenticar usuário, credenciais inválidas!"
        });

    usuario.senha = undefined;

    return res.status(200).json({
        usuario,
        token: generateToken(usuario.id)
    });
});
module.exports = app => app.use('/auth', router);