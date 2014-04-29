'use strict'

var myapp = angular.module('MEAN', ['ngRoute']).
    config(['$routeProvider', function ($routeProvider) {

        // These are the routes for our angular SPA
        // To see the routes for the REST api look at ../../routes.js

        $routeProvider.
            when('/', {templateUrl: '/partials/home.html'}).
            when('/user/', {templateUrl: '/partials/user.html', controller: userCtrl}). // userCtrl is defined below
            when('/contacts/', {templateUrl: '/partials/contacts.html', controller: contactCtrl}). // contactCtrl is defined below
            otherwise({redirectTo: '/'});
    }]);

// Controllers

function userCtrl($scope, sUser) {
    $scope.user = {};

    $scope.user.firstName = 'Stephen';
    $scope.user.lastName = 'Ward';
    $scope.user.userName = 'the_dude';
    $scope.user.avatar = {};

    $scope.save = function (form) {
        var promise;
        if ($scope.user._id) {
            promise = sUser.putUser($scope.user);
        }
        else {
            promise = sUser.postUser($scope.user);
        }

        promise.then(function (response) {
            for (var key in form) {
                if (form[key].$error) {
                    form[key].$error.mongoose = null;
                }
            }
            if (response.error) {
                // We got some errors, put them into angular
                for (key in response.error.errors) {
                    form[key].$error.mongoose = response.error.errors[key].type;
                }
            } else if (response) {
                //  handle response
                $scope.user = response;
            }
        });
    }
}

function contactCtrl($scope, sContact) {
    $scope.addContact = function () {
        $scope.contacts.push({phones: [], emails: []});
    };

    var promise = sContact.getContacts();
    promise.then(function (response) {
        $scope.contacts = response;
    });


    $scope.save = function (contact,form) {
        var promise;
        if (contact._id) {
            promise = sContact.putContact(contact);
        }
        else {
            promise = sContact.postContact(contact);
        }

        promise.then(function (data) {
            form.$setPristine();
            if (data.error) {
                // We got some errors, put them into angular
                for (key in data.error.errors) {
                    form[key].$error.mongoose = response.error.errors[key].type;
                }
            } else {
                $scope.contacts[$scope.contacts.indexOf(contact)] = data;
            }
        });
    };
}