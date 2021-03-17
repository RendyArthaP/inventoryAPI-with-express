const express = require('express');
const router = express.Router()
const {
  getInventory,
  getInventoryByID
} = require ('../controllers/inventory.controllers.js');

router.get('/', getInventory)

router.get('/:id', getInventoryByID)

module.exports = router