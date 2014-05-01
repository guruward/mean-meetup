'use strict';

var express = require('express'),
    http = require('http'),
    path = require('path'),
    mongoose = require('mongoose'),
    elmongo = require('elmongo');

var app = express(),
    server = http.Server(app),
    io = require('socket.io').listen(server);

app.db = mongoose.createConnection('mongodb://127.0.0.1/myapp');

io.sockets.on('connection', function (socket) {
    console.log('A user has connected');

    var contact = app.db.model('contact');

    socket.on('change:typeahead', function (data, fn) {
        if (data.fields && data.fields.length && typeof data.query === 'string') {
            contact.search(
                {query: data.query, fields: data.fields},
                function (err, searchResults) {
                    if(!err){
                        fn(searchResults);
                    }
                });
        }
    });
});

// config data models
require('./models')(app, mongoose, elmongo);

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}
require('./routes')(app, mongoose); // this will be my file containing all the route definitions

server.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

app.db.on('error', function () {
    console.error.bind(console, 'mongoose connection error: ');
});
app.db.once('open', function () {
    console.log('mongoose open for business');
});