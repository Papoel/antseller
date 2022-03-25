import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch,  useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card, ListGroupItem } from 'react-bootstrap'
import Message from '../compopnents/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'

const CartScreen = ({ match, location, history }) => {
    const productId = match.params.id

    const quantity = location.search ? Number(location.search.split('=')[1]) : 1

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    
    const { cartItems } = cart

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, quantity))
        }
    }, [dispatch, productId, quantity])

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const checkoutHandler = () => {
        // Todo => Attention à l'URL !
        history.push('/login?redirect=shipping')
    }

    return <Row>
        <Col md={8}>
            <h1>panier d'achat</h1>
            {cartItems.length === 0 ? (
                <Message>
                    Votre panier est vide
                        <Link className='btn btn-outline-info mx-1 py-0 px-1 rounded' to='/'>revenir à la liste de produits</Link>
                    en vente.
                </Message> 
                ) : (
                <ListGroup variant='flush'>
                    {cartItems.map(item => (
                        <ListGroup.Item key={ item.product }>
                            <Row>
                                <Col md={2}>
                                    < Image src={ item.image } alt={item.name} fluid rounded />
                                </Col>
                                <Col md={3}>
                                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                                </Col>
                                <Col md={2}> {item.price}€ </Col>
                                <Col md={2}>
                                <Form.Control
                                    as='select'
                                    value={item.qty}
                                    onChange={(e) =>
                                        dispatch(
                                        addToCart(item.product, Number(e.target.value))
                                        )
                                    }
                                    >
                                    {[...Array(item.countInStock).keys()].map((x) => (
                                        <option key={x + 1} value={x + 1}>
                                        {x + 1}
                                        </option>
                                    ))}
                                </Form.Control>
                                </Col>
                                <Col md={2}>
                                    <Button 
                                        type='button' 
                                        variant='light' 
                                        onClick={() => removeFromCartHandler(item.product)}>
                                        <i className='fas fa-trash text-danger'></i>
                                    </Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            ) }
        </Col>
        <Col md={4}>
            <Card>
                <ListGroup variant='flush'>
                    <ListGroupItem>
                        <h2 className='text-center' >
                            { cartItems.reduce((acc, item) => acc + item.quantity, 0 ) } article(s)
                        </h2>
                        {cartItems.length > 0 ? (
                            <p>
                                <span> Sous-Total :</span>
                                <span className='p-1 fw-bold'>
                                    { cartItems
                                        .reduce((acc, item) => acc + item.quantity * item.price, 0)
                                        .toFixed(2) 
                                    }€
                                </span>
                            </p>
                        ) : ( ''
                        )}
                        
                    </ListGroupItem>
                    <ListGroupItem>
                        <Button 
                            type='button' 
                            className='btn btn-success btn-block w-100' 
                            disabled={cartItems.length === 0} 
                            onClick={checkoutHandler}
                        >
                            <span className='font-weight-bold h5'> procéder au paiement </span>
                        </Button>
                    </ListGroupItem>
                </ListGroup>
            </Card>
        </Col>
    </Row>
}

export default CartScreen