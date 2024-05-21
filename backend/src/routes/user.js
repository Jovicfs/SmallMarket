const express = require('express');
const User = require('../database/models/users');
const router = express.Router();

// Endpoint para obter detalhes do usuário
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);s
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter usuário!' });
    }
});

module.exports = router;