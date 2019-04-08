var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { page: 'home' });
});

/* GET Users pages. */
router.get('/users', function(req, res, next) {
  res.render('users/list', { page: 'users-list' });
});

router.get('/users/add', function(req, res, next) {
  res.render('users/add', { page: 'users-add' });
});

router.get('/users/edit', function(req, res, next) {
  res.render('users/edit', { page: 'users-edit' });
});

module.exports = router;
