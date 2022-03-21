const express = require('express');
const router = express.Router();
const ProdutoDAO = require('../model/Produto');

router.get('/', (req, res) => {
    try {
        const produto = await 
    } catch (error) {
        
    }
});

router.get('/:id', (req, res) => {

});

router.post('/', (req, res) => {

});

// quando quer mudar alguma alteração, não todas
router.patch('/:id', (req, res) => {

});

router.delete('/', (req, res) => {

});

module.exports = router