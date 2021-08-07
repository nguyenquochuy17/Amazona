import express from 'express'
import data from './data.js'
const app = express()


app.get('/api/products/:id', (req, res) => {
    console.log("hehe")
    const product = data.products.find((x) => x._id === req.params.id)
    if (product) {
        res.send(product)
    } else {
        res.status(404).send({ message: 'Product not found' })
    }
})
app.get('/api/products', (req, res) => {
    res.send([
        {
            _id: '1',
            name: 'Nike Slim Shirt',
            category: 'Shirts',
            image: 'https://picsum.photos/200',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            _id: '2',
            name: 'Adidas Fit Shirt',
            category: 'Shirts',
            image: 'https://picsum.photos/200',
            price: 100,
            countInStock: 20,
            brand: 'Adidas',
            rating: 4.0,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            _id: '3',
            name: 'Lacoste Free Shirt',
            category: 'Shirts',
            image: 'https://picsum.photos/200',
            price: 220,
            countInStock: 0,
            brand: 'Lacoste',
            rating: 4.8,
            numReviews: 17,
            description: 'high quality product',
        },
        {
            _id: '4',
            name: 'Nike Slim Pant',
            category: 'Pants',
            image: 'https://picsum.photos/200',
            price: 78,
            countInStock: 15,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 14,
            description: 'high quality product',
        },
        {
            _id: '5',
            name: 'Puma Slim Pant',
            category: 'Pants',
            image: 'https://picsum.photos/200',
            price: 65,
            countInStock: 5,
            brand: 'Puma',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            _id: '6',
            name: 'Adidas Fit Pant',
            category: 'Pants',
            image: 'https://picsum.photos/200',
            price: 139,
            countInStock: 12,
            brand: 'Adidas',
            rating: 4.5,
            numReviews: 15,
            description: 'high quality product',
        },
    ])
})

app.get('/', (req, res) => {
    res.send('Sever is ready as f sdsd s sd')
})


const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Sever at http://localhost:${port}`)
})