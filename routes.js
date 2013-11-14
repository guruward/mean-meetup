/**
 * Created by stephen on 11/10/13.
 */

var api = require('./api');

exports = module.exports = function(app){

    // user REST
    app.get('/', api.index );

    // rest users
    app.get('/users/',require('./api/users').list) ;
    // user with id
    app.get('/users/:userId',require('./api/users').get) ;
    // add a new user
    app.post('/users',require('./api/users').post) ;
    //creating a put for updates , but mongo save will also update so we are using the same call
    app.put('/users',require('./api/users').put) ;

    // now the scary method :(  delete
    app.delete('/users/:userId',require('./api/users').delete) ;

    // Communications
    app.get('/communication/',require('./api/communications').list) ;
    // user with id
    app.get('/communication/:commId',require('./api/communications').get) ;
    // add a new user
    app.post('/communication',require('./api/communications').post) ;
    //creating a put for updates , but mongo save will also update so we are using the same call
    app.put('/communication',require('./api/communications').post) ;

    // now the scary method :(  delete
    app.delete('/communication/:commId',require('./api/communications').delete) ;

    // Communications
    app.get('/contact/',require('./api/contacts').list) ;
    // user with id
    app.get('/contact/:commId',require('./api/contacts').get) ;
    // add a new user
    app.post('/contact',require('./api/contacts').post) ;

    app.put('/contact',require('./api/contacts').post) ;

    // now the scary method :(  delete
    app.delete('/contact/:contactId',require('./api/contacts').delete) ;
}
