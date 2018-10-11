"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
exports.default = (controllers) => {
    fs.readdirSync(path.join(__dirname, 'controllers'))
        .filter(file => ((file.indexOf('.')) !== 0
        && (file !== "routes.js")
        && (file !== "index.js")))
        .forEach(file => {
        controllers.push(require(path.join(__dirname, 'controllers', file)));
    });
    console.log(controllers);
    return controllers;
};
//# sourceMappingURL=routes.js.map