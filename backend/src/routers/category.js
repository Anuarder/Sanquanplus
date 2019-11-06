const router = require('express').Router();
const categoryController = require('../controllers/category');

router.get('/get_categories', categoryController.getCategories);
router.post('/create_category', categoryController.createCategory);
router.post('/create_categories', categoryController.createCategories);

module.exports = router;