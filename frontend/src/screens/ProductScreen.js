import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Rating from '../compopnents/Rating'
import Message from '../compopnents/Message'
import Loader from '../compopnents/Loader'
import { listProductsDetails } from '../actions/productActions'

const ProductScreen = ({ history, match }) => {
    const [quantity, setQuantity] = useState(0)

    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails

    useEffect(() => {
        dispatch(listProductsDetails(match.params.id))
    }, [dispatch, match])

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id})?quantity=${quantity}`)
    }

    return (
        <>
            <Link className='btn btn-outline-dark my-3' to='/'>
                Retour
            </Link>
            {loading
                ? <Loader />
                : error
                    ? <Message variant='danger'>{error}</Message>
                    : (
                        <Row>
                            <Col md={4}>
                                <Image src={product.image} alt={product.name} fluid />
                            </Col>
                            <Col md={5}>
                                <ListGroup value='flush' >
                                    <ListGroup.Item><h4>{product.name}</h4></ListGroup.Item>
                                    <ListGroup.Item><Rating text={`${product.numReviews} évaluations`} value={product.rating} /></ListGroup.Item>
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

                                        {product.countInStock > 0 && (
                                            <ListGroup.Item>
                                                <Row>
                                                    <Col className='my-auto'> Quantité: </Col>
                                                    <Col>
                                                        <Form.Control
                                                            as='select'
                                                            value={quantity}
                                                            onChange={(e) => setQuantity(e.target.value)}>
                                                            {[...Array(product.countInStock).keys()].map((x) => (
                                                                <option key={x + 1} value={x + 1}>
                                                                    {x + 1}
                                                                </option>
                                                            ))}
                                                        </Form.Control>
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                        )}

                                        <ListGroup.Item>
                                            <Button
                                                onClick={addToCartHandler}
                                                className="btn-block w-100" 
                                                type='button' 
                                                disabled={product.countInStock === 0} 
                                            >
                                                Ajouter au panier
                                            </Button>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Col>
                        </Row>
                    )
            }
        </>
    )
}

export default ProductScreen
