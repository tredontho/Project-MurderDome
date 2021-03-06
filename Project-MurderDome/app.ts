import debug = require('debug');
import express = require('express');
import path = require('path');

import testRoute from './routes/testRoute';
import index from './routes/index';
import users from './routes/user';
import scripts from './routes/scripts';
import classes from './routes/classes';
import types from './routes/types';

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/test',testRoute);
app.use('/index', index);
app.use('/users', users);
app.use('/src/scripts',scripts);
app.use('/src/classes', classes);
app.use('/src/types', types);


//app.get('/scripts/testScript.js', (req: express.Request, res: express.Response) => {
//    res.sendFile(path.join(__dirname, 'scripts', 'testScript.js'));
//});

app.get('/', (req: express.Request, res: express.Response) => {
    res.sendFile(path.join(app.get('views'), 'testPage.html'));
});


// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use((err, req, res, next) => { // eslint-disable-line @typescript-eslint/no-unused-vars
        res.status(err['status'] || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => { // eslint-disable-line @typescript-eslint/no-unused-vars
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), function () {
    debug('Express server listening on port ' + server.address().port);
    console.log("Server listeneing on port" + server.address().port);
});
