var express = require('express');
var router = express.Router();

var resumes = require('../data/resumes.json');

router.get('/', function(req, res, next) {
  res.json({ resume: resumes[0] });
});

module.exports = router;
