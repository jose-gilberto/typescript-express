import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import * as crypto from 'crypto';


import { UsuarioRepository } from '../../database/repository/UsuarioRepository';
import { authConfig } from '../../config/authConfig';
import { Usuario } from '../models/Usuario';
import { transport } from '../../modules/MailerModule';

const router = express.Router();

// criar modulo de autenticação
function generateToken(params = {}) {
    return jwt.sign({ params }, authConfig.secret ,{
        expiresIn: 5400
    });
}

router.post('/registrar', async (req, res) => {
    const { email } = req.body;

    try {        
        let usuarioRepository: UsuarioRepository = new UsuarioRepository();
        
        if (await usuarioRepository.getRepository().findOne({ email })) {
            return res.status(400)
                    .json({
                        status: 400,
                        mensagem: "Erro ao cadastrar usuário!",
                        erro: "Já existe um usuário com este email!"
                    });
        }

        let usuario = new Usuario(req.body);

        usuario = await usuarioRepository.getRepository().save(usuario);

        usuario.senha = undefined;

        return res.status(200).json({
            status: 200,
            usuario,
            token: generateToken(usuario.id)
        });
    } catch (error) {
        return res.status(500)
            .json({
                status: 500,
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
            status: 400,
            mensagem: "Erro ao autenticar usuário, credenciais inválidas!"
        });
    
    if (!await bcrypt.compare(senha, usuario.senha))
        return res.status(400).json({
            status: 400,
            mensagem: "Erro ao autenticar usuário, credenciais inválidas!"
        });

    usuario.senha = undefined;

    return res.status(200).json({
        status: 200,
        usuario,
        token: generateToken(usuario.id)
    });
});

router.post('/esqueceu_senha', async (req, res) => {
    const { email } = req.body;
    let usuarioRepository = new UsuarioRepository();
    
    try {
        const usuario = await usuarioRepository.getRepository().findOne({
            select: ["id", "nome", "email", "token", "tokenTempo"],
            where: {
                email
            }
        });

        if (!usuario)
            return res.status(400).json({
                mensagem: "Usuário não encontrado! Tente novamente."
            });

        const token = crypto.randomBytes(20).toString('hex');

        const now = new Date();
        now.setHours(now.getHours() + 1);

        usuario.token = token;
        usuario.tokenTempo = now;
        
        await usuarioRepository.getRepository().save(usuario);

        transport.sendMail({
            'to': email,
            'from': 'gilberto@gmail.com',
            'template': 'esqueci_senha',
            'context': { token }
        }, err => {
            if (err)
                return res.status(400).json({
                    mensagem: 'Ocorreu um erro ao tentar enviar o email, tente novamente.'
                })

            res.send();
        });
    } catch (error) {
        res.status(400).json({
            mensagem: 'Erro ao tentar recuperar senha, tente novamente!'
        });
    }
});

router.post('/redefinir_senha', async (req, res) => {
    const { email, token, senha } = req.body;

    try {
        let usuarioRepository = new UsuarioRepository();
        const usuario = await usuarioRepository.getRepository().findOne({ 
            select: ["id", "nome", "senha", "email", "token", "tokenTempo"],
            where: email
        });

        if (!usuario)
            return res.status(400).json({
                mensagem: "Usuário não encontrado! Tente novamente."
            });

        if (token !== usuario.token)
            return 
    } catch (error) {
        
    }
});

module.exports = app => app.use('/auth', router);