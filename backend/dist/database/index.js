"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
exports.dbOptions = {
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "postgres",
    "database": "teste",
    "synchronize": true,
    "logging": false,
    "entities": [
        "src/app/models/**/*.ts"
    ],
    "migrations": [
        "src/database/migrations/**/*.ts"
    ],
    "subscribers": [
        "src/database/subscriber/**/*.ts"
    ]
};
//# sourceMappingURL=index.js.map