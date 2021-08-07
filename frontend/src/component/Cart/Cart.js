import { Grid } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cartItems)
    return (
        <main>
            <Grid>
                {cartItems.map(x => (
                    <div>
                        <div>{x.name}</div>
                        <div>{x.price}</div>
                        <div>{x.image}</div>
                    </div>
                ))}
            </Grid>
        </main>
    )
}

export default Cart

