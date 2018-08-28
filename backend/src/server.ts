import 'reflect-metadata';
import { createConnection } from 'typeorm';

import app from './app';
import routes from './app/routes';
import { Usuario } from './app/models/Usuario';

const PORT = 3000;

createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "teste",
    entities: [
        "src/app/models/**/*.ts"
    ],
    synchronize: true,
    logging: false
}).then(async conn => {
    // here you can work with your entities
    console.log('Conectado ao mysql!');
}).catch(erro => {
    console.log(`Ocorreu um erro ao conectar com o banco de dados: ${erro}`);
});

routes(app);

app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});

export default app;