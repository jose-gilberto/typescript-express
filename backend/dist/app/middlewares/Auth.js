"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const authConfig_1 = require("../../config/authConfig");
class AuthMiddleware {
    static requireAuth(req, res, next) {
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
        const [scheme, token] = tokenParts;
        if (!/^Bearer$/i.test(scheme))
            return res.status(401).json({
                erro: "Erro de formatação no Token!"
            });
        jwt.verify(token, authConfig_1.authConfig.secret, (err, decoded) => {
            if (err)
                return res.status(401).json({
                    erro: "Token inválido!"
                });
            req.userId = decoded.params.id;
            return next();
        });
    }
}
exports.AuthMiddleware = AuthMiddleware;
//# sourceMappingURL=Auth.js.map