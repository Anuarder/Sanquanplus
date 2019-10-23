const {
  isEmpty
} = require('lodash');
const Category = require('../models/Category');

module.exports = {
  async getCategories(req, res) {
    try {
      const categories = await Category.find({});
      if (!isEmpty(categories)) {
        res.status(200).send({
          categories: categories
        })
      } else {
        res.status(404).send({
          error: "Категории отсутсвуют"
        })
      }
    } catch (err) {
      console.log(err);
      res.status(400).send({
        error: err
      })
    }
  },
  async createCategory(req, res) {
    try {
      const categories = await Category.insertMany(req.body.categories);
      res.status(200).send({
        message: "Категории добавлены"
      })
    } catch (err) {
      console.log(err);
      res.status(400).send({
        error: err
      })
    }
  }
}