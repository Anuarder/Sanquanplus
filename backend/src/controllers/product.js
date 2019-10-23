const {
  isEmpty
} = require('lodash');
const Product = require('../models/Product');

module.exports = {
  async getProducts(req, res) {
    try {
      const products = await Product.find({});
      if (!isEmpty(products)) {
        res.status(200).send({
          products: products
        });
      } else {
        res.status(404).send({
          error: "Товары отсутсвуют"
        })
      }
    } catch (err) {
      console.log(err);
      res.status(400).send({
        error: err
      })
    }
  },
  async createProduct(req, res) {
    try {
      const product = await Product.insertMany(req.body.products);
      res.status(200).send({
        message: "Товары добавлены"
      });
    } catch (err) {
      console.log(err);
      res.status(400).send({
        error: err
      })
    }
  }
}