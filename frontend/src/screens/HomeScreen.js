import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../compopnents/Product'
import product from '../compopnents/Product'
import axios from 'axios'

const HomeScreen = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('http://127.0.0.1:8080/api/products')

            setProducts(data)
        }
        fetchProducts()
    },[] )

    return (
        <>
            <h1>Les dernières fourmis</h1>
            <Row>
                {products.map((product) => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3} >
                    <Product product={product} />
                  </Col >
                ))}
            </Row>
        </>
    )
}

export default HomeScreen
