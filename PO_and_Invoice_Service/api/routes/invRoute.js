const express = require('express');
const route = express.Router();
const inv = require('../controller/invoice');
//Invoice Creation 
route.post('/addInv',inv.addInv);

//Retrieve All the Invoice 
route.get('/searchInv',inv.searchInv);

//Find Invoice Based on Purchase Order
route.post('/findInv',inv.findInv);

//Update Status of Invoice
route.post('/updateState',inv.updateState);
module.exports = route;