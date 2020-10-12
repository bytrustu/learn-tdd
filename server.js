const express = require('express');

const PORT = 5000;
const HOST = '0.0.0.0';

const app = express();
app.use(express.json());

const productRoutes = require('./routes');

app.use('/api/products', productRoutes);


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);