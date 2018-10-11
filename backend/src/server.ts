import 'reflect-metadata';
import { createConnection } from 'typeorm';

import app from './app';
import { dbOptions } from './database';
import routes from './app/routes';

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
routes(app);

app.listen(PORTA, () => {
    console.log(`Servidor iniciado na porta ${PORTA}`);
});

export default app;