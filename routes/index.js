var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/register', function(req, res, next) {
    res.render('register', { whatToSend: 'Nerfin' });
});

router.post('/register', function(req, res, next) {
    res.redirect('/login');
});

module.exports = router;
