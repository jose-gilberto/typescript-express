import 'reflect-metadata';
import { createConnection } from 'typeorm';

import app from './app';
import routes from './app/routes';
import { dbOptions } from './database';
import { ErrorHandler } from './app/middlewares/ErrorHandler';
import { useExpressServer } from 'routing-controllers';

import { HomeController } from './app/controllers/HomeController';

const PORTA = process.env.PORTA  || 3000;

// Conectando ao banco de dados
/*
createConnection(dbOptions).then(async conn => {
    console.log(`Conectado ao ${dbOptions.type}`);
}).catch(erro => {
    console.log(`Ocorreu um erro ao conectar com o banco de dados: ${erro}`);
});
*/
// Importando rotas
//routes(app);

useExpressServer(app, {
    controllers: [
        HomeController
    ]
})

// Capturando erros 404
//app.use(ErrorHandler.notFound);

app.listen(PORTA, () => {
    console.log(`Servidor iniciado na porta ${PORTA}`);
});

export default app;