const express = require('express');
const router = express.Router()
const {
  getInventory,
  getInventoryByID,
  addItemToInventory,
  editItemToInventory,
  deleteItemFromInventory
} = require ('../controllers/inventory.controllers.js');

router.get('/', getInventory)

router.get('/:id', getInventoryByID)

router.post('/', addItemToInventory)

router.put('/:id', editItemToInventory)

router.delete('/:id', deleteItemFromInventory)

module.exports = router