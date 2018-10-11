import { Controller, Get, JsonController, Param, UseBefore } from 'routing-controllers'
import { AuthMiddleware } from '../middlewares/AuthMiddleware';

@Controller('/home')
export class HomeController {

    @Get("/")
    getAll() {
       return "<h4>Olá Mundo</h4>";
    }

    @Get("/param/:id")
    getOne(@Param("id") id:number) {
        return `${id}`;
    }

}