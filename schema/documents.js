'use strict';

module.exports = function (app, mongoose) {
    var documentSchema = new mongoose.Schema({
        docOwner: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user'
            }
        ],
        docType: {type: String},
        dateSaved: {type: Date},
        description: {type: String},
        fileLocation: {type: String} // url to file
    });

    app.db.model('document', documentSchema);
};
