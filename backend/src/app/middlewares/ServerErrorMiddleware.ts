import { ExpressErrorMiddlewareInterface, Middleware } from "routing-controllers";


 @Middleware({ type: 'after' })
export class ServerErrorMiddleware implements ExpressErrorMiddlewareInterface {

    error(error: any, request: any, response: any, next: () => any) {
        response.status(500).json({
            mensagem: "Ops!Ocorreu um erro no servidor, tente novamente."
        });
        next();
    }

}  