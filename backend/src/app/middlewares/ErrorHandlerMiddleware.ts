import { Request, Response, NextFunction} from 'express';
import { Middleware, ExpressMiddlewareInterface, ExpressErrorMiddlewareInterface, HttpError } from 'routing-controllers';

export class NotFoundError extends HttpError {
    
    constructor() {
        super(404, "Ops! A página solicitada não foi encontrada, tente novamente.");
    }

}

@Middleware({ type: 'after' })
export class ServerErrorMiddleware implements ExpressErrorMiddlewareInterface {

    error(error: any, request: any, response: any, next: (err :any) => any) {
        next(error);
    }

}  