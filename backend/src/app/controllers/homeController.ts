import * as express from 'express'

const router = express.Router()

router.get('/', async (req, res) => {
    res.send('Bem vindo ao Boilerplate Typescript + ORM!')
})

module.exports = app => app.use('/', router);