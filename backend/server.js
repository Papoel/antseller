import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import products from './data/products.js'

const app = express()

dotenv.config()

connectDB()

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

app.listen(
    PORT,
    'localhost',
    console.log(`Le serveur AntSeller tourne en mode ${ENV} sur le port : ${PORT}`.cyan.italic.bold))