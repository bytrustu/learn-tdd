const express = require('express');

const PORT = 5000;
const HOST = '0.0.0.0';

const app = express();
app.use(express.json());

const productRoutes = require('./routes');
const mongoose = require('mongoose');

const password = 'dydwns89';
const dbName = 'tdd';
const uri = `mongodb+srv://bytrustu:${password}@cluster0.erj1u.mongodb.net/${dbName}?retryWrites=true&w=majority`;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('success');
}).catch(e => {
    console.log(e);
})


app.use('/api/products', productRoutes);


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);