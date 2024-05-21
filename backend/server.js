const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./src/routes/auth');
const userRoutes = require('./src/routes/user');
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');

const app = express();
const PORT = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json());
 
//Rotas
app.use('/routes/auth', authRoutes);
app.use('/routes/users', userRoutes);
app.use('/routes/products', productRoutes);
app.use('/routes/cart', cartRoutes);

//Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/yourdbname', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB conectado!'))
    .catch(err => console.log(err));

app.listen(PORT, () =>{

    console.log(`Servidor rodando na porta ${PORT}`);

});

