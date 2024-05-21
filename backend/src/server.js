// backend/src/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product'); // Verifique se o nome do arquivo está correto, deve ser singular 'product.js'
const cartRoutes = require('./routes/cart');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/yourdbname', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB conectado!'))
    .catch(err => console.log(err));

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
