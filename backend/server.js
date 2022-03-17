const express = require('express')
const app = express()
const dotenv = require('dotenv')
const products = require('./data/products')
dotenv.config()
const PORT = process.env.PORT || 5000
const ENV = process.env.NODE_ENV

app.get('/api/products/', (req, res) => {
    res.set('Content-Type', 'application/json')
    res.json(products)
})

app.get('/api/products/:id', (req, res) => {
    res.set('Content-Type', 'application/json')
    const product = products.find(p => p._id === req.params.id)
    res.json(product)
})

app.listen(PORT, 'localhost', console.log(`Serveur tourne en mode ${ENV} sur le port : ${PORT}`))