const router = require('express').Router();
const productController = require('../controllers/product');

router.get('/get_products', productController.getProducts);
router.post('/create_product', productController.createProduct);

module.exports = router;