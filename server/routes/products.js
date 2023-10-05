const express = require('express')
const router = express.Router()
const Product = require('../model/product')

router.get('', async function (req, res) {
    foundProducts = await Product.find({})
    return res.json(foundProducts)
})

router.get('/:productId', async function (req, res) {
    const productId = req.params.productId
    try {
        foundProduct = await Product.findById(productId)
        return res.json(foundProduct)
    } catch (error) {
        return res.status(422).send({errors: [{title: 'Product error', detail: 'Product not found!'}]})
    }

    // const productId = req.params.productId
    // foundProduct = await Product.findById(productId, err)
    // if (err) {
    //     return res.status(422).send({errors: [{title: 'Product error', detail: 'Product not found!'}]})
    // }
    // return res.json(foundProduct)
})

module.exports = router