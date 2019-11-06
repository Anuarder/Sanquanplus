const {
  isEmpty
} = require('lodash');
const Product = require('../models/Product');

module.exports = {
  async getSearchProducts(req, res) {
    try {
      const products = await Product.find({});
      const { search } = req.body;
      if (!isEmpty(products)) {
        // TODO: Поиск товаров здесь замутим
        const result = ['sha vse budet'];
        for(let item of products) {
          console.log(item.name.en === search)
        }
        res.send({
          products: result
        })
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
  async createProducts(req, res) {
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
  },
  async getProductsByCategory(req, res) {
    try{
      const products = await Product.find({category: req.params.id});
      res.status(200).send({
        products: products
      });
    }catch(err){
      console.log(err);
      res.status(400).send({
        error: err
      })
    }
  },
  async getProductById(req, res) {
    try{
      const product = await Product.findOne({_id: req.params.id});
      res.status(200).send({
        product: product
      });
    }catch(err){
      console.log(err);
      res.status(400).send({
        error: err
      })
    }
  }
}