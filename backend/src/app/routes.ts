import { useExpressServer } from 'routing-controllers';

// Controllers
import { HomeController } from './controllers/HomeController';

// Middlewares
import { ServerErrorMiddleware } from './middlewares/ErrorHandlerMiddleware';
import { AuthMiddleware } from './middlewares/AuthMiddleware';

export default (app) => {
    useExpressServer(app, {
        controllers: [
            HomeController,
        ],
        middlewares: [
            ServerErrorMiddleware,
            AuthMiddleware           
        ],
        defaultErrorHandler: false
    });
}