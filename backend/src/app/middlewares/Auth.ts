import * as jwt from 'jsonwebtoken';

import { authConfig } from '../../config/authConfig';

export class AuthMiddleware {

    public static requireAuth(req, res, next) {
        const authHeader = req.headers.authorization;

        if (!authHeader)
            return res.status(401).json({
                erro: "Nenhum token foi enviado!"
            });

        const tokenParts = authHeader.split(' ');

        if (tokenParts.length !== 2)
            return res.status(401).json({
                erro: "Token inválido!"
            });

        const [ scheme, token ] = tokenParts;

        if (!/^Bearer$/i.test(scheme))
            return res.status(401).json({
                erro: "Erro de formatação no Token!"
            });

        jwt.verify(token, authConfig.secret, (err, decoded) => {
            if (err)
                return res.status(401).json({
                    erro: "Token inválido!"
                })

            req.userId = decoded.params.id;
            return next();
        });      
    }

}
