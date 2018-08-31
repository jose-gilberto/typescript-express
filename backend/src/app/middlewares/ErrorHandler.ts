import { Request, Response, NextFunction} from 'express';

export class ErrorHandler {

    constructor() { }

    public static notFound(req: Request, res: Response, next: NextFunction) {
        res.status(404).json({
            mensagem: "Ops! Não foi possível localizar o endereço. Tente novamente."
        });
        next();
    }

}