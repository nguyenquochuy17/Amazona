import React from 'react'
import { Grid } from '@material-ui/core'
import Product from './Product/Product'
import useStyles from './styles.js'
const Products = () => {
    const products = [
        { id: 1, name: " Shoes", description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests Add 1 cup of frozen peas along with the mussels, if you like.', price: '$20', image: 'https://friendlyshoes.com/wp-content/uploads/Friendly-Shoes-Womens-Voyage-Low-Top-Mint-Peach-Shoe-Featured.jpg' },
        { id: 2, name: "Macbook", description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests Add 1 cup of frozen peas along with the mussels, if you like.', price: '$15', image: 'https://hc.com.vn/i/ecommerce/media/GS.007152_FEATURE_74775.jpg' },
        { id: 3, name: "Macbook", description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests Add 1 cup of frozen peas along with the mussels, if you like.', price: '$30', image: 'https://hc.com.vn/i/ecommerce/media/GS.007152_FEATURE_74775.jpg' },
        { id: 4, name: "Macbook", description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests Add 1 cup of frozen peas along with the mussels, if you like.', price: '$45', image: 'https://hc.com.vn/i/ecommerce/media/GS.007152_FEATURE_74775.jpg' }
    ]
    const classes = useStyles()
    return (
        <main className={classes.container}>
            <Grid container spacing={3}>
                {products.map(product => (
                    <Grid item xs={12} sm={6} md={4} lg={3} >
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main >
    )
}

export default Products
