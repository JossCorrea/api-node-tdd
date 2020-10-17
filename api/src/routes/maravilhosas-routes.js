const express = require('express');
const router = express.Router();
const controller = require('../controllers/maravilhosas-controller');

//get /maravilhosas
router.get('/maravilhosas', controller.getMaravilhosas);

//post /maravilhosas
router.post('/maravilhosas', controller.addMaravilhosa);

//get /maravilhosas/id
router.get('/maravilhosas/:id', controller.getMaravilhosaById);

//put /maravilhosas/id
router.put('/maravilhosas/:id', controller.updateMaravilhosa)

//delete /maravilhosas/id
router.delete('/maravilhosas/:id', controller.deleteMaravilhosa)

module.exports = router;