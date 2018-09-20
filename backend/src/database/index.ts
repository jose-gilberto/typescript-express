import "reflect-metadata";
import { ConnectionOptions } from 'typeorm';

export let dbOptions: ConnectionOptions = {
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
}