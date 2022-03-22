import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'

import productRoutes from './routes/productRoutes.js'

dotenv.config()

// connectDB()

const app = express()

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.json)

app.get('/', (req, res) => {
    res.write('Avec la fonction write : API est en cours d\'éxécution')
    res.end()
    })

app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 5000
const ENV = process.env.NODE_ENV

app.listen(
    PORT,
    'localhost',
    console.log(`Le serveur AntSeller tourne en mode ${ENV} sur le port : ${PORT}`.cyan.italic.bold))
