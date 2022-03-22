import express from 'express'
import colors from 'colors'
import asyncHandler from 'express-async-handler'
import 'express-async-errors'
import Product from '../models/productModel.js'

const router = express.Router()

/*
 * @description:    Récupère tous les produits
 * @route:          GET api/products
 * @access:         Public
*/
router.get('/', asyncHandler(async(request, response) => {
    try {
        const products = await Product.find({})
        response.json(products)
    } catch (error) {
        console.log("Une erreur s'est produite".white.bgRed)
    }
}))

/*
 * @description:    Récupère un produit
 * @route:          GET api/product/:id
 * @access:         Public
*/
router.get('/:id',asyncHandler( async (request, response) => {
    const product = await Product.findById(request.params.id)
    if (product) {
        response.json(product)
    } else {
        response.status(404)
        throw new Error("Cet article n'existe pas !" )
    }
}))

export default router