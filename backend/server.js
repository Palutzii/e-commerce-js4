const express = require('express');
const cors = require('cors');
const products = require('./mockData');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/products/:id', (req,res) => {
    const product = products.find(p => p.id === req.params.id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).send('Product not found');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});