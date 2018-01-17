var express = require('express'),
        path = require('path'),
        index = require('./routes/index'),
        users = require('./routes/users'),
        contacts = require('./routes/contacts'),
        test = require('./routes/test'),
        app = express(),
        bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// include scripts located inside the node_modules folder
app.use('/scripts', express.static(__dirname + '/node_modules/'));
app.use('/assets', express.static(__dirname + '/public/assets'));
app.use('/', index);
app.use('/users', users);
app.use('/api/contacts', contacts);
app.use('/test', test);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
