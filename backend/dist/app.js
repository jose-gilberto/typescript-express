"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
class App {
    constructor() {
        this.app = express();
        this.config();
    }
    config() {
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
exports.default = new App().app;
//# sourceMappingURL=app.js.map