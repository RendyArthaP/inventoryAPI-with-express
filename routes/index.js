const express = require('express');
const router = express.Router();
const inventoryRouter = require ('./inventory.routes.js');

router.get('/', (req, res) => {
  res.json({
    message: "Router success!"
  })
})

router.use('/inventory', inventoryRouter)

module.exports = router