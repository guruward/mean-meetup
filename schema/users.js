/**
 * Created by stephen on 11/10/13.
 */
exports = module.exports =function(app,mongoose){

    var userSchema = new mongoose.Schema({

        firstName:{type:String},
        lastName:{type:String},
        userName:{type:String, unique: true},
        password:{type:String},
        avatar:{type:String},
        position:{type:String}

    })

    app.db.model('user',userSchema) ;
}
