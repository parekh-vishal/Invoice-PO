const express = require('express');
const route = express.Router();
const po = require('../controller/po');
//Add Purchse Order to System
route.post('/addPo',po.addPo);

//Retrive Purchse Orders form Specific Group
route.post('/searchPo',po.searchPo);

//Find All Purchase Order from System
route.get('/findAll',po.findAll);

//Update Status of Purchase Order
route.post('/updateStatus',po.updateStatus);

module.exports = route;