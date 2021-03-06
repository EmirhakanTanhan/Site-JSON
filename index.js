const express = require('express');
const cors = require('cors');
const app = express();

/*app.use(express.json());*/
app.use(cors({credentials: true, origin: true}));

const {products} = require('./data.json');

//get all products
app.get('/api/products', (req, res) => {
    res.send(products);
})

//get the product with the given id
app.get('/api/products/:id', (req, res) => {
    const product = products.find(c => c.productId === req.params.id);
    if (!product) res.status(404).send('Product could\'t found.');
    else res.send(product);
});

//add a product
app.post('/api/products', (req, res) => {
    const product = {
        id: "deneme" + products.length + 1,
        name: req.body.name,
    };
    products.push(product);
    res.send(product);
});

//update a product
app.put('/api/products/:id', (req, res) => {
    const product = products.find(c => c.productId === req.params.id);
    if (!product) res.status(404).send('Product could\'t found.');

    let updatedLike = parseInt(product['params']['likeCount']) + 1;
    product['params']['likeCount'] = updatedLike.toString();
    res.send(product);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));