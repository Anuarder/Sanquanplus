const router = require('express').Router();
const productController = require('../controllers/product');

router.get('/get_products', productController.getProducts);
router.get('/get_products_by_category/:id', productController.getProductsByCategory);
router.get('/get_product_by_id/:id', productController.getProductById);
router.post('/create_product', productController.createProduct);

module.exports = router;