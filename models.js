'use strict'

module.exports = function (app, mongoose, elmongo) {
    require('./schema/users')(app, mongoose, elmongo);
    require('./schema/documents')(app, mongoose, elmongo);
    require('./schema/communications')(app, mongoose, elmongo);
    require('./schema/contacts')(app, mongoose, elmongo);
};