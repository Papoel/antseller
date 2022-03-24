import { 
    PRODUCT_LIST_RQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,     
    PRODUCT_DETAILS_RQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL 
    } from '../constants/productConstants'

export const productListReducer = (state = { products:[] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_RQUEST:
            return { loading: true, products: [] }
        case PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload }
        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const productDetailsReducer = (
    state = { product:{ reviews: [] } }, action
    ) => {
    switch (action.type) {
        case PRODUCT_DETAILS_RQUEST:
            return { loading: true, ...state }
        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload }
        case PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}