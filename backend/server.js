import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
// Importer la gestion des erreurs
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

import productRoutes from './routes/productRoutes.js'
import cors from 'cors'

dotenv.config()
// Se connecter à la base de donnée.
connectDB()

const app = express()

// Paramétrer les Headers
app.use((request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
    )
    response.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, PATCH, OPTIONS'
    )
    next()
})

app.use(express.json())
app.use(cors())

app.get('/', (request, response) => {
    response.send("API est en cours d'éxécution")
})

app.use('/api/products', productRoutes)

// Gérer les erreurs
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 8080
const ENV = process.env.NODE_ENV

// noinspection JSForgottenDebugStatementInspection,JSCheckFunctionSignatures,JSVoidFunctionReturnValueUsed
app.listen(PORT, console.log(
    `Le serveur AntSeller tourne en mode ${ENV} sur http://localhost:${PORT}`
        .cyan.italic.bold
    )
)
