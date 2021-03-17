let inventory = require('../models/inventory');

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
    if(!invent) {
      res.json({
        message: "data by id tidak ditemukan"
      })
    } else {
      res.json({
        message: "Get data inventory by id success",
        data: invent
      })
    }
  },

  addItemToInventory: (req, res) => {
    const invent = req.body
    inventory.push(invent)

    res.json({
      message: "data item berhasil masuk ke inventory",
      data: inventory
    })
  },

  editItemToInventory: (req, res) => {
    const id = req.params.id
    const invent = inventory.findIndex(item => item.id == id)

    inventory[invent] = req.body

    res.json({
      message: "data item di inventory berhasil di update",
      data: inventory[invent]
    })
  },

  deleteItemFromInventory: (req, res) => {
    const id = req.params.id
    inventory = inventory.filter(item => item.id != id)

    res.json({
      message: `data item dengan id ${id} berhasil di hapus`
    })
  }
}