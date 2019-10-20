const router = require('express').Router();
const categoryController = require('../controllers/category');

router.get('/get_categories', categoryController.getCategories);
router.post('/create_category', categoryController.createCategory);

module.exports = router;