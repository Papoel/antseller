import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

/*
 * @description:    Récupère tous les produits
 * @route:          GET api/products
 * @access:         Public
*/
const getProducts = asyncHandler( async (request, response) => {
    const products = await Product.find({})

    response.json(products)
})

/*
 * @description:    Récupère un produit
 * @route:          GET api/product/:id
 * @access:         Public
*/
const getProductById = asyncHandler( async (request, response) => {
    const product = await Product.findById(request.params.id)
    
    if (product) {
        response.json(product)
    } else {
        response.status(404)
        throw new Error("Cet article n'existe pas !" )
    }
})

export { getProducts, getProductById }