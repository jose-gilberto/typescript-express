import "reflect-metadata";
import { ConnectionOptions } from 'typeorm';

export let dbOptions: ConnectionOptions = {
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "",
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
}