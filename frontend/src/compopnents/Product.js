import React from 'react'
import { Card } from 'react-bootstrap'

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
                <div className="my-3">
                    {product.rating} pour {product.numReviews} évaluations
                </div>
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