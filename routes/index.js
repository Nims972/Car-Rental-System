var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("in index.js");
  res.render('pages/login', { title: 'Express' });
});

router.get('/dash', function(req, res, next) {
  console.log("in index.js");

  res.render('pages/dash', { title: 'Express' });
});

router.get('/register', function(req, res, next) {
  console.log("in index.js");

  res.render('pages/register', { title: 'Express' });
});



module.exports = router;
