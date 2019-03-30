var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/dash', { title: 'Express' });
});
router.get('/register', function(req, res, next) {
  res.render('pages/dash', { title: 'Express' });
});
module.exports = router;
