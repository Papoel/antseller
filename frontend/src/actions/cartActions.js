import axios from 'axios'
import { CARD_ADD_ITEM } from '../constants/cartConstants'

const addToCart = (id, quantity) => async(dispatch, getState) => {
    const { data } = await axios.get(`127.0.0.1:8080/api/products/${id}`)

    dispatch({
        type: CARD_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image, 
            price: data.price,
            countInStock: data.countInStock,
            quantity,
        }
    })

    localStorage.setItem('cartItems',  JSON.stringify(getState().cart.cartItems))
} 