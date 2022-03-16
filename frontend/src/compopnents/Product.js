import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
    return (
        <Card className='my-3 p-3 rounded'>

            {/* Image */}
            <a href={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top' />
            </a>

            {/* Titre */}
            <Card.Body >
                <a href={`/product/${product._id}`}>
                    <Card.Title as='div'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </a>
            </Card.Body>

            {/* Note */}
            <Card.Text>
                <Rating
                    value={product.rating}
                    text={`${product.numReviews} évaluations`}
                />
            </Card.Text>

            {/* Prix */}
            <Card.Text as={'h3'}>
                {product.price}€
            </Card.Text>

            {/*  */}
        </Card>
    )
}

export default Product