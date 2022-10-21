const SneaksAPI = require('sneaks-api');
const sneaks = new SneaksAPI();

const express = require('express')
const app = express()
const port = 3000

//getProducts(keyword, limit, callback) takes in a keyword and limit and returns a product array 


app.get('/', (req, res) => {
    res.send('Sneaker Tracker')
})
app.get('/search', (req, res) => {
    console.log(req.query.sneaker)
    //let sneakers = []
    sneaks.getProducts(req.query.sneaker, 50, (err, prods) => {
        //sneakers = [...prods];
        res.send(prods)
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports = app;