const express = require('express');
const route = express.Router();
const user = require('../controllers/user');
const organization = require('../controllers/organization');
const group = require('../controllers/group');
const role = require('../controllers/role');
const right = require('../controllers/rights');
const checkAuth = require('../Authentication/check_auth');

//User SignUP
route.post('/signup',user.addUser);

//Get all User Info
route.get('/userList',checkAuth,user.userData);

//User LogIn
route.post('/login',user.logUser);

//Organization Registration 
route.post('/orgReg',organization.orgReg);

//Retrive All organization List
route.get('/orgList',checkAuth,organization.orgRetrive);

//Group Creation
route.post('/grpReg',checkAuth,group.addGrp);

//Add User TO Group
route.post('/addToGrp',checkAuth,group.addUser);

//Role Creation
route.post('/roleReg',checkAuth,role.addRole);

//Role Assignment to User
route.post('/roleAssign',checkAuth,role.roleAssign);

//Rights Creation 
route.post('/rgtCreate',checkAuth,right.addRight);

//Rights Assignment to User 
route.post('/rgtAssign',checkAuth,right.rgtAssign);

module.exports = route;
