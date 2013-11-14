
exports.list = function(req, res){

    var user = req.app.db.model('communication') ;

    var query = communication.find() ;
    query.sort({date:'asc'}) ;
    query.exec(function(err,data){
        if(err){
            console.log(err);
            res.send(500) ;
        }
        res.json(data) ;
    })


};


exports.get = function(req, res){

    var communication = req.app.db.model('communication') ;


    try{
        var id = req.params['commId'] ;
        communication.findOne({_id: id}, function(err,data){
            console.log('find by id') ;
            res.json(data) ;
        });
    }
    catch(e){
        console.log(e);
        res.send(e) ;
    }


}

// put and post can use the same.
exports.post = function(req, res){

    var communication = req.app.db.model('communication') ;

    var newComm = new communication(req.body) ;
    newComm.save(function(err,data){
        if(err) console.log(err) ;
        res.json(data) ;
    })

}

exports.delete = function(req,res){

    var communication = req.app.db.model('communication') ;
    communication.remove({_id:req.params['commId']}, function(err,data){
        if(err) console.log(err) ;
        res.send(data) ;
    }) ;
}
