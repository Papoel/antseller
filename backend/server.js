const express = require('express')
const app = express()
const products = require('./data/products')
const PORT = 5000

app.get('/api/products/', (req, res) => {
    res.set('Content-Type', 'application/json')
    res.json(products)
})

app.get('/api/products/:id', (req, res) => {
    res.set('Content-Type', 'application/json')
    const product = products.find(p => p._id === req.params.id)
    res.json(product)
})

app.listen(PORT, 'localhost', console.log(`Serveur tourne sur le port : ${PORT}`))