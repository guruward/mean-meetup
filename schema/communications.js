'use strict';

module.exports = function (app, mongoose) {
    var communicationSchema = new mongoose.Schema({
        commType: {type: String},
        date: {type: Date},
        description: {type: String},
        followUpDate: {type: Date},
        owner: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user'
            }
        ]
    });

    app.db.model('communication', communicationSchema);
};
