const {
  isEmpty
} = require('lodash');
const Product = require('../models/Product');

module.exports = {
  async getSearchProducts(req, res) {
    try {
      const products = await Product.find({});
      const res_search = req.params.search;
      const search = res_search.toLowerCase();
      if (!isEmpty(products)) {
        const text = products.filter(el => {
          return el.name.en.toLowerCase().includes(search) || 
            el.name.ru.toLowerCase().includes(search) ||
            el.description.en.toLowerCase().includes(search) ||
            el.description.ru.toLowerCase().includes(search);
        });
        console.log(search)
        // Поиск по характеристикам
        // const characteristics = products.filter.characteristics.data((el, i, array) => {
        //   console.log(array[i][el])
        // });

        res.send({
          products: text
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