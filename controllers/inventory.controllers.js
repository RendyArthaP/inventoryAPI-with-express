const inventory = require('../models/inventory');

module.exports = {
  getInventory: (req, res) => {
    res.json({
      message: "Get data inventory success",
      data: inventory
    })
  },
  
  getInventoryByID: (req, res) => {
    const id = req.params.id
    const invent = inventory.find(item => item.id == id)
    res.json({
      message: "Get data inventory by id success",
      data: invent
    })
  }
}