/**
 * Created by stephen on 11/10/13.
 */

exports = module.exports = function(app){

		// The REST api
			// app . VERB ( URI , METHOD )
			// VERB can be GET, POST, UPDATE, DELETE

    // users
    app.get('/api/v1/users',require('./api/users').list);
    app.get('/api/v1/users/:userId',require('./api/users').get);
    app.post('/api/v1/users',require('./api/users').post) ;
    app.put('/api/v1/users',require('./api/users').put) ;
    app.delete('/api/v1/users/:userId',require('./api/users').delete) ;

    // Communications
    app.get('/api/v1/communication/',require('./api/communications').list) ;
    app.get('/api/v1/communication/:commId',require('./api/communications').get) ;
    app.post('/api/v1/communication',require('./api/communications').post) ;
    app.put('/api/v1/communication',require('./api/communications').post) ;
    app.delete('/api/v1/communication/:commId',require('./api/communications').delete) ;

    // contacts
    app.get('/api/v1/contact/',require('./api/contacts').list) ;
    app.get('/api/v1/contact/:commId',require('./api/contacts').get) ;
    app.post('/contact/',require('./api/contacts').post) ;
    app.put('/contact/',require('./api/contacts').put) ;
    app.delete('/contact/:contactId',require('./api/contacts').delete) ;
}
