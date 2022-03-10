const express = require('express');
const app = express();
const adminRoutes = require('./routes/admin');
const usuariosRoutes = require('./routes/usuarios');
const cookieParser = require('cookie-parser');

app.use(express.static('public'));

app.use(express.json());
app.use(cookieParser());
app.use((req, res, next) => {

    console.log('Executando Middleware em nível de aplicação');

    return next();
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/admin', adminRoutes);
app.use('/usuarios', usuariosRoutes);

app.get('/setcookie', (req, res) => {
    res.cookie('user', 'Genival Dantas', {maxAge: 900000, httpOnly: true});
    return res.send('Cookie gravado com sucesso!');
});

app.get('/getcookie', (req, res) => {
    let user = req.cookies['user'];

    if (user) {
        return res.send(user);
    }
});

app.get('*', (req, res, next) => {
    setImmediate(() => {
        next( new Error('Temos um problema'));
    })
})

app.use((err, req, res, next) => {
    console.log('Temos um erro, veja as instruções para corrigilos');
    res.status(500).json({message: err.message});
})

app.listen(3000, () => {
    console.log(`Server running: http://localhost:3000`);
});
