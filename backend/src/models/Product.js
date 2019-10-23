const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characteristicsSchema = new Schema({
  name: {
    ru: String,
    en: String
  },
  headers: [{
    name: String,
    value: String
  }],
  data: [{
    name: {
      ru: String,
      en: String
    },
    value: String
  }]
})

const productSchema = new Schema({
  name: {
    ru: String,
    en: String
  },
  images: [String],
  description: {
    ru: String,
    en: String
  },
  characteristics: [characteristicsSchema],
  category: String,
  subcategory: String
}, {
  collection: "products"
}, {
  versionKey: false
});

module.exports = mongoose.model("Product", productSchema);