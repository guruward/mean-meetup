exports.list = function (req, res) {
	var user = req.app.db.model('user');

	var query = user.find();
	query.sort({lastName: 'asc'});
	query.exec(function (err, data) {
		if (err) {
			console.log(err);
			res.send(500);
		}
		res.json(data);
	})
};


exports.get = function (req, res) {
	var user = req.app.db.model('user');

	try {
		var id = req.params['userId'];
		user.findOne({_id: id}, function (err, data) {
			console.log('find by id');
			res.json(data);
		});
	}
	catch (e) {
		console.log(e);
		res.send(e);
	}


};

// manages both post and put

exports.post = function (req, res) {
	var user = req.app.db.model('user');

	var newuser = new user(req.body);
	newuser.validate(function (error) {
		if (error) {
			res.json({ error: error });
		} else {

			newuser.save(function (err, data) {

				res.send(data);
			})
		}
	});
};

exports.put = function (req, res) {
	var user = req.app.db.model('user');

	var newuser = new user(req.body);
	newuser.validate(function (error) {
		if (error) {
			res.json({ error: error });
		} else {
			delete req.body._id;
			user.findByIdAndUpdate({_id: newuser._id}, {$set: req.body}, function (err, data) {
				res.json(data);
			})

		}
	});
};

exports.delete = function (req, res) {
	var user = req.app.db.model('user');

	user.remove({_id: req.params['userId']}, function (err, data) {
		if (err) console.log(err);
		res.json(data);
	});

};

