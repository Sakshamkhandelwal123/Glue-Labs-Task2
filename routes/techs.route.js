const express = require('express');
const router = express.Router();
const techController = require('../controller/tech.controller');

router.post('/', techController.addTech);
router.get('/', techController.findTechs);
router.get('/:id', techController.findTechById);
router.put('/:id', techController.updateTech);
router.delete('/:id', techController.deleteById);

module.exports = router;