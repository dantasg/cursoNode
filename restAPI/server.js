// Primeiros requires
require('dotenv').config();
const express = require('express');
const app = express();
const pg = require('pg');

// Configurando Db
const config = {
    host: process.env.HOST_STRING,
    user: process.env.USER_STRING,
    password: process.env.PASSWORD_STRING,
    database: process.env.DATABASE_STRING,
    port: process.env.PORT_NUMBER
}

const db = new pg.Client(config);
db.connect();
db.on('error', (err)=> console.log(err));
db.once('open', ()=> console.log('Database Connected'));

// Configurando app
// // requires para app
const subscibersRouter = require('./routes/subscribers')

// // configurando app.use
app.use(express.json());
app.use('/subscribers', subscibersRouter);

app.listen(3000, () => console.log('Servidor está rodando!\nhttp://localhost:3000'));
