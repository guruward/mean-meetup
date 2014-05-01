'use strict';
/* global myapp */

myapp.factory('socket', function (socketFactory) {
    return socketFactory();
});

// This file is mainly talking to our REST api
myapp.service('sUser', function ($http, $q) {
	this.getUsers = function () {
		var deferred = $q.defer();

		$http({method: 'GET', url: '/api/users'}).success(function (data) {
			deferred.resolve(data);
			return data;
		});
		return deferred.promise;
	};
	this.getUser = function (userId) {
		var deferred = $q.defer();

		$http({method: 'GET', url: '/api/users/' + userId}).success(function (data) {
			deferred.resolve(data);
			return data;
		});
		return deferred.promise;
	};
	this.postUser = function (user) {
		var deferred = $q.defer();

		$http({method: 'POST', url: '/api/users/', data: user}).success(function (data) {
			deferred.resolve(data);
			return data;
		});
		return deferred.promise;
	};
	this.putUser = function (user) {
		var deferred = $q.defer();

		$http({method: 'PUT', url: '/api/users/', data: user}).success(function (data) {
			deferred.resolve(data);
			return data;
		});
		return deferred.promise;
	};
	this.deleteUser = function (userId) {
		var deferred = $q.defer();
		$http({method: 'DELETE', url: '/api/users/' + userId}).success(function (data) {
			deferred.resolve(data);
			return data;
		});
		return deferred.promise;
	};
});

myapp.service('sComm', function ($http, $q) {
	this.getComms = function () {
		var deferred = $q.defer();

		$http({method: 'GET', url: '/api/communication'}).success(function (data) {
			deferred.resolve(data);
			return data;
		});
		return deferred.promise;
	};
	this.getComm = function (commId) {
		var deferred = $q.defer();

		$http({method: 'GET', url: '/api/communication/' + commId}).success(function (data) {
			deferred.resolve(data);
			return data;
		});
		return deferred.promise;
	};

	this.postComm = function (comm) {
		var deferred = $q.defer();

		$http({method: 'POST', url: '/api/communication/', data: comm}).success(function (data) {
			deferred.resolve(data);
			return data;
		});
		return deferred.promise;
	};

	this.deleteComm = function (commId) {
		var deferred = $q.defer();
		$http({method: 'DELETE', url: '/api/communication/' + commId}).success(function (data) {
			deferred.resolve(data);
			return data;
		});
		return deferred.promise;
	};
});

myapp.service('sContact', function ($http, $q) {
	this.getContacts = function () {
		var deferred = $q.defer();

		$http({method: 'GET', url: '/api/contact/'}).success(function (data) {
			deferred.resolve(data);
			return data;
		});
		return deferred.promise;
	};
	this.getContact = function (contactId) {
		var deferred = $q.defer();

		$http({method: 'GET', url: '/api/contact/' + contactId}).success(function (data) {
			deferred.resolve(data);
			return data;
		});
		return deferred.promise;
	};

	this.postContact = function (contact) {
		var deferred = $q.defer();

		$http({method: 'POST', url: '/api/contact/', data: contact}).success(function (data) {
			deferred.resolve(data);
			return data;
		});
		return deferred.promise;
	};

    this.putContact = function (contact) {
        var deferred = $q.defer();

        $http({method: 'PUT', url: '/api/contact/', data: contact}).success(function (data) {
            deferred.resolve(data);
            return data;
        });
        return deferred.promise;
    };

	this.deleteContact = function (contactId) {
		var deferred = $q.defer();
		$http({method: 'DELETE', url: '/api/contact/' + contactId}).success(function (data) {
			deferred.resolve(data);
			return data;
		});
		return deferred.promise;
	};


    this.find = function (query) {
        var deferred = $q.defer();
        $http({method: 'GET', url: '/api/find/contact', params: {query:query}}).success(function (data) {
            deferred.resolve(data);
            return data;
        });
        return deferred.promise;
    };

    this.search = function (query) {
        var deferred = $q.defer();
        $http({method: 'GET', url: '/api/search/contact', params: {query:query}}).success(function (data) {
            deferred.resolve(data);
            return data;
        });
        return deferred.promise;
    };
});