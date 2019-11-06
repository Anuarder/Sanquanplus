const router = require('express').Router();
const productController = require('../controllers/product');

router.get('/get_search_products', productController.getSearchProducts);
router.get('/get_products_by_category/:id', productController.getProductsByCategory);
router.get('/get_product_by_id/:id', productController.getProductById);
router.post('/create_products', productController.createProducts);

module.exports = router;