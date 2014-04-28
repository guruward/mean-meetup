'use strict';

module.exports = function (app) {

    /* The REST api */
    // app.{VERB}( {URI},{METHOD} )
    // VERB can be GET, POST, UPDATE, DELETE

    // users
    app.get('/api/users', require('./api/users').list);
    app.get('/api/users/:userId', require('./api/users').get);
    app.post('/api/users', require('./api/users').post);
    app.put('/api/users', require('./api/users').put);
    app.delete('/api/users/:userId', require('./api/users').delete);

    // Communications
    app.get('/api/communication/', require('./api/communications').list);
    app.get('/api/communication/:commId', require('./api/communications').get);
    app.post('/api/communication', require('./api/communications').post);
    app.put('/api/communication', require('./api/communications').post);
    app.delete('/api/communication/:commId', require('./api/communications').delete);

    // contacts
    app.get('/api/contact/', require('./api/contacts').list);
    app.get('/api/contact/:commId', require('./api/contacts').get);
    app.post('/contact/', require('./api/contacts').post);
    app.put('/contact/', require('./api/contacts').put);
    app.delete('/contact/:contactId', require('./api/contacts').delete);
};
