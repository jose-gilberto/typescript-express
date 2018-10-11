"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const app_1 = require("./app");
// Middlewares
const NotFoundMiddleware_1 = require("./app/middlewares/NotFoundMiddleware");
const HomeController_1 = require("./app/controllers/HomeController");
const PORTA = process.env.PORTA || 3000;
// Conectando ao banco de dados
/*
createConnection(dbOptions).then(async conn => {
    console.log(`Conectado ao ${dbOptions.type}`);
}).catch(erro => {
    console.log(`Ocorreu um erro ao conectar com o banco de dados: ${erro}`);
});
*/
// Importando rotas
routing_controllers_1.useExpressServer(app_1.default, {
    controllers: [
        HomeController_1.HomeController,
    ],
    middlewares: [
        NotFoundMiddleware_1.NotFoundMiddleware
    ],
    defaultErrorHandler: false
});
// Capturando erros 404
//app.use(ErrorHandler.notFound);
app_1.default.listen(PORTA, () => {
    console.log(`Servidor iniciado na porta ${PORTA}`);
});
exports.default = app_1.default;
//# sourceMappingURL=server.js.map