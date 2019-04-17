var express = require('express');
var router = express.Router();

/* GET test page. */
router.get('/teste', function(req, res, next) {
  res.render('teste', { page: 'teste' });
});

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

router.get('/users/edit/:tagId', function(req, res, next) {
  res.render('users/edit', { page: 'users-edit', tagId: req.params.tagId });
});

router.get('/users/drop/:tagId', function(req, res, next) {
  res.send("Drop user with ID " + req.params.tagId);
});

// Exeption tratative URLs
router.get('/users/edit', function(req, res, next) { res.redirect('/users'); });
router.get('/users/drop', function(req, res, next) { res.redirect('/users'); });

module.exports = router;
