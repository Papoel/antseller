import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
    try {
        // Effacer la base de données
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        // Créer une constante qui récupère les Users
        const createdUsers = await User.insertMany(users)

        // Récupérer l'admin
        const adminUser = createdUsers[0]._id

        // Affecter tous les produits à l'Administrateur en utilisant le destructuring
        const sampleProducts = products.map(product => {
            return {...product, user: adminUser}
        })

        // On insère les données
        await Product.insertMany(sampleProducts)

        console.log('Données importées !'.green.inverse)

        // Check the doc
        process.exit()
    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}


const destroyData = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        console.log('Données détruites !'.red.inverse)
        process.exit()
    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}
// argv est un tableau de 2 index
if(process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}