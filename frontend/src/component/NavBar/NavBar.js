import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Button, Typography, Grid } from '@material-ui/core'
import { ShoppingCart, AccountCircle } from '@material-ui/icons'
import logo from '../../images/logo.png'
import useStyles from './styles'
import { Link } from 'react-router-dom'
const NavBar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Typography component={Link} to="/" variant='h6' color="inherit" className={classes.logoTitle}>
                        <img src={logo} alt="Commerce.js" height="50px" className={classes.image} />
                        FITNEZZ
                    </Typography>
                    <Typography className={classes.itemsWrapper} >
                        <Grid container justifyContent="center" spacing={5} >
                            <Grid item>
                                <Button variant="text" color="inherit" >Home</Button>
                            </Grid>
                            <Grid item  >
                                <Button component={Link} to="/product/3" color="inherit" >About</Button>
                            </Grid  >
                            <Grid item >
                                <Button color="inherit" >Contact</Button>
                            </Grid>
                            <Grid item >
                                <Button color="inherit">NguHH</Button>
                            </Grid>
                        </Grid>
                    </Typography>
                    <IconButton aria-label="Show cart items" color="inherit">
                        <Badge color="secondary">
                            <AccountCircle />
                        </Badge>
                    </IconButton>
                    <IconButton aria-label="Show cart items" color="inherit">
                        <Badge color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                    <Button variant="outlined" color="inherit" className={classes.login}>Login</Button>
                </Toolbar>
            </AppBar>
        </div >
    );
}

export default NavBar
