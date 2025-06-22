const express = require('express');
const router = express.Router();
const nutritionistController = require('../controllers/nutritionistController');

router.get('/', nutritionistController.getAll);
router.post('/', nutritionistController.create);
router.put('/:id', nutritionistController.update);
router.delete('/:id', nutritionistController.delete);

module.exports = router;
