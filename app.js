
/**
 * Module dependencies.
 */

var express = require('express');
// var routes = require('./routes'); this is the default express writes, Im changing it up a bit
// var user = require('./api/user');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose') ;

var app = express();

app.db = mongoose.createConnection('mongodb://localhost/myapp') ;

app.db.on('error', function() {
    console.error.bind(console, 'mongoose connection error: ');
});
app.db.once('open', function () {
    console.log('mongoose open for business');
});

// config data models
require('./models')(app, mongoose) ;


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
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
//  I'm commenting out the routing here, because I want to isolate it in it own file.
// app.get('/', routes.index);
// app.get('/users', user.list);

require('./routes')(app,mongoose) ; // this will be my file containing all the route definitions

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
