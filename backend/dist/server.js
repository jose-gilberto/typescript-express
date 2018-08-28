"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const app_1 = require("./app");
const Photo_1 = require("./app/models/Photo");
const PORT = 3000;
typeorm_1.createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "teste",
    entities: [
        Photo_1.Photo,
    ],
    synchronize: true,
    logging: false
}).then((conn) => __awaiter(this, void 0, void 0, function* () {
    // here you can work with your entities
    console.log('Conectado ao mysql!');
    let photo = new Photo_1.Photo();
    photo.name = "Me and Bears";
    photo.description = "Im near of a polar bears.";
    photo.filename = "me-and-bears.png";
    photo.views = 200;
    photo.isPublished = true;
    let photoRepository = conn.getRepository(Photo_1.Photo);
    yield photoRepository.save(photo);
    console.log('Foto salva!');
})).catch(err => {
    console.log(err);
});
app_1.default.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    res.send('Olá Mundo!');
}));
app_1.default.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});
//# sourceMappingURL=server.js.map