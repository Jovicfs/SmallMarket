const express = require('express');
const Product = require('../database/models/product.js');
const router = express.Router();

// Endpoint para obter todos os produtos
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter produtos!' });
    }
});

module.exports = router;