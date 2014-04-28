'use strict';

module.exports =function(app, mongoose, elmongo){
    var userSchema = new mongoose.Schema({
        firstName:{type:String},
        lastName:{type:String},
        userName:{type:String, unique: true},
        password:{type:String},
        avatar:{type:String},
        position:{type:String}
    });

    app.db.model('user',userSchema) ;
};
