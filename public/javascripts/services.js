// This file is mainly talking to our REST api

myapp.service('sUser', function ($http, $q) {

	this.getUsers = function () {
		var deferred = $q.defer();

		$http({method: 'GET', url: '/api/v1/users'}).success(function (data, status) {
			deferred.resolve(data);
			return data;
		});
		return deferred.promise;
	}
	this.getUser = function (userId) {
		var deferred = $q.defer();

		$http({method: 'GET', url: '/api/v1/users/' + userId}).success(function (data, status) {
			deferred.resolve(data);
			return data;
		});
		return deferred.promise;
	}
	this.postUser = function (user) {
		var deferred = $q.defer();

		$http({method: 'POST', url: '/api/v1/users/', data: user}).success(function (data, status) {
			deferred.resolve(data);
			return data;
		});
		return deferred.promise;
	}
	this.putUser = function (user) {
		var deferred = $q.defer();

		$http({method: 'PUT', url: '/api/v1/users/', data: user}).success(function (data, status) {
			deferred.resolve(data);
			return data;
		});
		return deferred.promise;
	}
	this.deleteUser = function (userId) {
		var deferred = $q.defer();
		$http({method: 'DELETE', url: '/api/v1/users/' + userId}).success(function (data, status) {
			deferred.resolve(data);
			return data;
		});
		return deferred.promise;
	}

});

myapp.service('sComm', function ($http, $q) {

	this.getComms = function () {
		var deferred = $q.defer();

		$http({method: 'GET', url: '/api/v1/communication'}).success(function (data, status) {
			deferred.resolve(data);
			return data;
		});
		return deferred.promise;
	}
	this.getComm = function (commId) {
		var deferred = $q.defer();

		$http({method: 'GET', url: '/api/v1/communication/' + commId}).success(function (data, status) {
			deferred.resolve(data);
			return data;
		});
		return deferred.promise;
	}

	this.postComm = function (comm) {
		var deferred = $q.defer();

		$http({method: 'POST', url: '/api/v1/communication/', data: comm}).success(function (data, status) {
			deferred.resolve(data);
			return data;
		});
		return deferred.promise;
	}

	this.deleteComm = function (commId) {
		var deferred = $q.defer();
		$http({method: 'DELETE', url: '/api/v1/communication/' + commId}).success(function (data, status) {
			deferred.resolve(data);
			return data;
		});
		return deferred.promise;
	}

});

myapp.service('sContact', function ($http, $q) {

	this.getContacts = function () {
		var deferred = $q.defer();

		$http({method: 'GET', url: '/api/v1/contact/'}).success(function (data, status) {
			deferred.resolve(data);
			return data;
		});
		return deferred.promise;
	}
	this.getContact = function (ContactId) {
		var deferred = $q.defer();

		$http({method: 'GET', url: '/api/v1/contact/' + ContactId}).success(function (data, status) {
			deferred.resolve(data);
			return data;
		});
		return deferred.promise;
	}

	this.postContact = function (Contact) {
		var deferred = $q.defer();

		$http({method: 'POST', url: '/api/v1/contact/', data: Contact}).success(function (data, status) {
			deferred.resolve(data);
			return data;
		});
		return deferred.promise;
	}

	this.deleteContact = function (ContactId) {
		var deferred = $q.defer();
		$http({method: 'DELETE', url: '/api/v1/contact/' + ContactId}).success(function (data, status) {
			deferred.resolve(data);
			return data;
		});
		return deferred.promise;
	}

});