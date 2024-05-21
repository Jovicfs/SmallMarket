const express = require('express');
const Cart = require('../database/models/cart');
const router = express.Router();

// Endpoint para obter o carrinho do usuário
router.get('/:userId', async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId });
        res.json(cart);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter carrinho!' });
    }
});

module.exports = router;