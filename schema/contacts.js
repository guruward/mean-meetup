'use strict';

module.exports = function (app, mongoose, elmongo) {
    var contactSchema = new mongoose.Schema({
        contactType: {type: String},
        firstName: {type: String},
        lastName: {type: String},
        phones: [
            {
                phnType: {type: String},
                number: {type: String}
            }
        ],
        emails: [
            {email: {type: String}}
        ],
        company: {type: String},
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
    contactSchema.plugin(elmongo);

    app.db.model('contact', contactSchema);
};

