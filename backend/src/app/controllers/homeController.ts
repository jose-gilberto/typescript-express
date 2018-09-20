import { Controller, Get } from 'routing-controllers'

@Controller()
export class HomeController {

    @Get("/users")
    getAll() {
       return "This action returns all users";
    }

}