var express = require('express');
var router = express.Router();

const CLIENT = require('../data/clients.json');
const USERS = require('../data/users.json');
const ROLES = require('../data/roles.json');
const ACTIONS = require('../data/sample_actions.json');
const RESOURCES = require('../data/resources.json');

const SAMPLE_MAIN_MENU = require('../data/main_menu.json');
const ROLE_DETAIL = require('../data/role_detail.json');
const CLIENT_DETAIL = require('../data/client_detail.json');
const FRAMEWORk = require('../data/framework.json');
const FRAMEWORk_DETAIL = require('../data/framework_detail.json');
const SURVEY_TEMPLATES = require('../data/survey_template.json');
const SURVEY_TEMPLATES_DEATIL = require('../data/survey_template_detail.json');



router.get('/users', function(req, res, next) {
  res.send(USERS);
});

router.get('/clients', function(req, res, next) {
  res.send(CLIENT);
});

router.get('/clients/:id', function(req, res, next) {
  res.send(CLIENT_DETAIL);
});

router.get('/roles', function(req, res, next) {
  res.send(ROLES);
});

router.get('/roles/:id', function(req, res, next) {
  res.send(ROLE_DETAIL);
});

router.get('/actions', function(req, res, next) {
  res.send(ACTIONS);
});

router.get('/resources', function(req, res, next) {
  res.send(RESOURCES);
});

router.get('/sample_main_menu', function(req, res, next) {
  res.send(SAMPLE_MAIN_MENU);
});

router.get('/frameworks', function(req, res, next) {
  res.send(FRAMEWORk);
});

router.get('/frameworks/:id', function(req, res, next) {
  res.send(FRAMEWORk_DETAIL);
});

router.get('/surveyTemplates', function(req, res, next) {
  res.send(SURVEY_TEMPLATES);
});

router.get('/surveyTemplates/:id', function(req, res, next) {
  res.send(SURVEY_TEMPLATES_DEATIL);
});


module.exports = router;
