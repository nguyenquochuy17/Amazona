import React, { useEffect, useState } from 'react'
import { Grid, Typography, Button } from '@material-ui/core'
import { detailsProduct } from '../../../../actions/productActions'
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import useStyles from './styles.js'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';
import { useParams } from 'react-router-dom';
import { addToCart } from '../../../../actions/cartActions';
const ProductDetail = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const [qty, setQty] = useState(1)
    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails
    const classes = useStyles();
    const handleAddToCart = (product, qty) => {
        dispatch(addToCart(product, qty))
    }

    useEffect(() => {
        dispatch(detailsProduct(id))
    }, [dispatch, id])
    return (
        <div>
            {loading ? <CircularProgress color="secondary" />
                : error ? <Alert severity="error">{error}</Alert>
                    :
                    <section className={classes.container}>
                        <Grid container spacing={5}>
                            <Grid item md={6} >
                                <Typography className={classes.imageContain}>
                                    <img className={classes.image} src={product.image} alt="product detail" />
                                </Typography>
                            </Grid>
                            <Grid item md={6}>
                                <Typography variant="h4" style={{ marginBottom: "15px" }} className={classes.productName}>{product.name}</Typography>
                                <Box display="flex" alignItems="center" style={{ marginBottom: "15px" }} >
                                    <Box borderColor="transparent">
                                        <Rating name="read-only" value={product.rating} precision={0.5} readOnly />
                                    </Box>
                                    <Box ml={2} borderColor="transparent" style={{ color: '#f73471' }}>
                                        | {product.numReviews} sold
                                    </Box>
                                </Box>
                                <Typography variant="h5" style={{ color: '#f73471', marginBottom: "15px" }}>${product.price}</Typography>
                                <Typography variant="body1" className={classes.description} style={{ marginBottom: "30px" }}>
                                    {product.description}
                                </Typography>
                                <Box class={classes.buttonContain} >
                                    <Box display="flex" alignItems="center" className={classes.buttons}>
                                        <Button type="button" onClick={() => {
                                            if (qty > 1) {
                                                setQty(qty - 1)
                                            }
                                        }
                                        } >-</Button>
                                        <input className={classes.input} value={qty} onChange={(e) => setQty(+(e.target.value))}></input>
                                        <Button type="button" onClick={() => setQty(qty + 1)}  >+</Button>
                                    </Box>
                                    <Button variant="contained" onClick={() => handleAddToCart(product, qty)} style={{ borderRadius: '20px', backgroundColor: "#f73471", color: '#fff', marginLeft: '1em' }}>Add To Cart</Button>
                                    <Button display="flex" style={{ border: "1px solid #f73471", height: "35px", marginLeft: '1em' }}>
                                        <FavoriteBorderIcon variant="contained" style={{ color: "#f73471" }}>
                                        </FavoriteBorderIcon>
                                    </Button>
                                </Box>
                                <Box mb={3} className={classes.line}></Box>
                                <Box display="flex" mb={3}>
                                    <Typography variant="h6" style={{ fontWeight: '600' }}>Availability</Typography>
                                    <Typography variant="h6" style={{ marginLeft: '70px' }}>In stock</Typography>
                                </Box>
                                <Box display="flex" mb={3}>
                                    <Typography variant="h6" style={{ fontWeight: '600' }}>Availability</Typography>
                                    <Typography variant="h6" style={{ marginLeft: '70px' }}>In stock</Typography>
                                </Box>
                                <Box display="flex" mb={3}>
                                    <Typography variant="h6" style={{ fontWeight: '600' }}>Availability</Typography>
                                    <Typography variant="h6" style={{ marginLeft: '70px' }}>In stock</Typography>
                                </Box>
                                <Box display="flex">
                                    <Typography variant="h6" style={{ fontWeight: '600' }}>Availability</Typography>
                                    <Typography variant="h6" style={{ marginLeft: '70px' }}>In stock</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </section >
            }
        </div>

    )
}

export default ProductDetail
