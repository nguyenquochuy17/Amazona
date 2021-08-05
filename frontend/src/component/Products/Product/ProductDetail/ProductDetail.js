import React from 'react'
import { Grid, Typography, Button, Input } from '@material-ui/core'
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import useStyles from './styles.js'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
const ProductDetail = () => {
    const classes = useStyles();

    return (
        <section className={classes.container}>
            <Grid container spacing={5}>
                <Grid item md={6} >
                    <Typography className={classes.imageContain}>
                        <img className={classes.image} src="https://nypost.com/wp-content/uploads/sites/2/2018/12/122818-shanghai-big-pixel.jpg?quality=80&strip=all" alt="product detail" />
                    </Typography>
                </Grid>
                <Grid item md={6}>
                    <Typography variant="h4" style={{ marginBottom: "15px" }} className={classes.productName}>Macbook</Typography>
                    <Box display="flex" alignItems="center" style={{ marginBottom: "15px" }} >
                        <Box borderColor="transparent">
                            <Rating name="read-only" value={5} precision={0.5} readOnly />
                        </Box>
                        <Box ml={2} borderColor="transparent" style={{ color: '#f73471' }}>
                            | {17} sold
                        </Box>
                    </Box>
                    <Typography variant="h5" style={{ color: '#f73471', marginBottom: "15px" }}>$120</Typography>
                    <Typography variant="body1" className={classes.description} style={{ marginBottom: "30px" }}>
                        This impressive paella is a perfect party dish and a fun meal to cook together with your guests Add 1 cup of frozen peas along with the mussels, if you like.
                        This impressive paella is a perfect party dish and a fun meal to cook together with your guests Add 1 cup of frozen peas along with the mussels, if you like.
                    </Typography>
                    <Box class={classes.buttonContain} >
                        <Box display="flex" alignItems="center" className={classes.buttons}>
                            <Button type="button" >-</Button>
                            <input type="text" className={classes.input} value="1"></input>
                            <Button type="button" >+</Button>
                        </Box>
                        <Button variant="contained" style={{ borderRadius: '20px', backgroundColor: "#f73471", color: '#fff', marginLeft: '1em' }}>Add To Cart</Button>
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
    )
}

export default ProductDetail
