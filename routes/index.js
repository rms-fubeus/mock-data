var express = require('express');
var router = express.Router();

const CLIENT = require('../data/clients.json');
const USERS = require('../data/users.json');
const ROLES = require('../data/roles.json');
const ACTIONS = require('../data/sample_actions.json');
const RESOURCES = require('../data/resources.json');


router.get('/users', function(req, res, next) {
  res.send(USERS);
});

router.get('/clients', function(req, res, next) {
  res.send(CLIENT);
});

router.get('/roles', function(req, res, next) {
  res.send(ROLES);
});

router.get('/actions', function(req, res, next) {
  res.send(ACTIONS);
});

router.get('/resources', function(req, res, next) {
  res.send(RESOURCES);
});

module.exports = router;
