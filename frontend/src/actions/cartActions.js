import { CART_ADD_ITEM } from "../constants/cardConstants"

export const addToCart = (product, qty) => async (dispatch, getState) => {
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            name: product.name,
            image: product.image,
            price: product.price,
            countInStock: product.countInStock,
            product: product._id,
            qty,
        }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}