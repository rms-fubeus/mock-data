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
const INTERVIEW_TEMPLATES = require('../data/interview_template.json');
const SURVEY_TEMPLATES_DEATIL = require('../data/survey_template_detail.json');
const MATURITY_DETAILS_DEATIL = require('../data/maturity_model_detail.json');
const MATURITY_DEATIL = require('../data/maturity_detail.json');
const MATURITY_MODEL = require('../data/maturity_model.json');
const SCORING_LOGIC_DEATIL = require('../data/scoring_logic_detail.json');
const SCORING_LOGIC = require('../data/scoring_logic.json');
const MAPPING_DEATIL = require('../data/mapping_detail.json');
const MAPPING = require('../data/mapping.json');



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

router.get('/interviewTemplates', function(req, res, next) {
  res.send(INTERVIEW_TEMPLATES);
});

router.get('/surveyTemplates/:id', function(req, res, next) {
  res.send(SURVEY_TEMPLATES_DEATIL);
});

router.get('/maturityModels/:id', function(req, res, next) {
  res.send(MATURITY_DETAILS_DEATIL);
});

router.get('/scoringLogics/:id', function(req, res, next) {
  res.send(SCORING_LOGIC_DEATIL);
});

router.get('/scoringLogic', function(req, res, next) {
  res.send(SCORING_LOGIC);
});

router.get('/mappings/:id', function(req, res, next) {
  res.send(MAPPING_DEATIL);
});

router.get('/mapping', function(req, res, next) {
  res.send(MAPPING);
});

router.get('/maturityModel/:id', function(req, res, next) {
  res.send(MATURITY_DEATIL);
});

router.get('/maturityModel', function(req, res, next) {
  res.send(MATURITY_MODEL);
});


module.exports = router;
