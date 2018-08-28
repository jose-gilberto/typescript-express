import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';
import * as helmet from 'helmet';
import * as cors from 'cors';

class App {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
    }

    private config(): void {
        // Configurando o body-parser
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: false
        }));
        // Configurando logger(Morgan)
        this.app.use(logger("dev"));
        // Configurando helmet e cors
        this.app.use(helmet());
        this.app.use(cors());
    }

}

export default new App().app;