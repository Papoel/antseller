import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
import Rating from '../compopnents/Rating'
import axios from 'axios'


const ProductScreen = ({ match }) => {
    const [product, setProduct] = useState({})

    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get(`http://127.0.0.1:8080/api/products/${match.params.id}`)

            setProduct(data)
        }
        fetchProduct()
    },[] )

    return (
        <>
            <Link className='btn btn-outline-dark my-3' to='/'>
                Retour
            </Link>
            <Row>
                <Col md={4}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={5}>
                    <ListGroup value='flush' >
                        <ListGroup.Item><h4>{product.name}</h4></ListGroup.Item>
                        <ListGroup.Item><Rating text={`${product.numReviews} évaluations`} value={product.rating}/></ListGroup.Item>
                        <ListGroup.Item>Prix : {product.price} €</ListGroup.Item>
                        <ListGroup.Item>Description : {product.description}</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup value='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Prix:</Col>
                                    <Col><strong>{product.price} €</strong></Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col><strong>{product.countInStock > 0 ? 'Disponible' : 'En Rupture'}</strong></Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Button className="btn-block w-100" type='button' disabled={product.countInStock === 0} >
                                    Ajouter au panier
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen
