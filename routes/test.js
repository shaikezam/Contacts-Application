var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/test', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    res.sendFile('index.html');
});

module.exports = router;