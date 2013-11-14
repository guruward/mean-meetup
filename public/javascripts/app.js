/**
 * Created by stephen on 11/13/13.
 */

myapp = angular.module('MEAN',[]).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/', {templateUrl: 'partials/home.html',   controller: userCtrl}).
            when('/user/', {templateUrl: 'partials/user.html', controller: userCtrl}).
            when('/contacts/', {templateUrl: 'partials/contacts.html', controller: contactCtrl}).
            otherwise({redirectTo: '/'});
    }]);

myapp.service('sUser',function($http,$q){

    this.getUsers = function(){
        var defered = $q.defer() ;

        $http({method:'GET', url: '/users'}).success(function(data,status){
            deferred.resolve(data);
            return data ;
        });
        return defered.promise ;
    }
    this.getUser = function(userId){
        var defered = $q.defer() ;

        $http({method:'GET', url: '/users/'+ userId}).success(function(data,status){
            deferred.resolve(data);
            return data ;
        });
        return defered.promise ;
    }
    this.postUser = function(user){
        var defered = $q.defer() ;

        $http({method:'POST', url: '/users/', data:user}).success(function(data,status){
            defered.resolve(data);
            return data ;
        });
        return defered.promise ;
    }
    this.putUser = function(user){
        var defered = $q.defer() ;

        $http({method:'PUT', url: '/users/', data:user}).success(function(data,status){
            defered.resolve(data);
            return data ;
        });
        return defered.promise ;
    }
    this.deleteUser = function(userId){
        var defered = $q.defer();
        $http({method:'DELETE',url:'/users/' + userId}).success(function(data,status){
            defered.resolve(data);
            return data ;
        });
        return defered.promise ;
    }

});

myapp.service('sComm',function($http,$q){

    this.getComms = function(){
        var defered = $q.defer() ;

        $http({method:'GET', url: '/communication'}).success(function(data,status){
            deferred.resolve(data);
            return data ;
        });
        return defered.promise ;
    }
    this.getComm = function(commId){
        var defered = $q.defer() ;

        $http({method:'GET', url: '/communication/'+ commId}).success(function(data,status){
            deferred.resolve(data);
            return data ;
        });
        return defered.promise ;
    }

    this.postComm = function(comm){
        var defered = $q.defer() ;

        $http({method:'POST', url: '/communication/', data:comm}).success(function(data,status){
            defered.resolve(data);
            return data ;
        });
        return defered.promise ;
    }

    this.deleteComm = function(commId){
        var defered = $q.defer();
        $http({method:'DELETE',url:'/communication/' + commId}).success(function(data,status){
            defered.resolve(data);
            return data ;
        });
        return defered.promise ;
    }

});

myapp.service('sContact',function($http,$q){

    this.getContacts = function(){
        var defered = $q.defer() ;

        $http({method:'GET', url: '/contact'}).success(function(data,status){
            deferred.resolve(data);
            return data ;
        });
        return defered.promise ;
    }
    this.getContact = function(ContactId){
        var defered = $q.defer() ;

        $http({method:'GET', url: '/contact/'+ ContactId}).success(function(data,status){
            deferred.resolve(data);
            return data ;
        });
        return defered.promise ;
    }

    this.postContact = function(Contact){
        var defered = $q.defer() ;

        $http({method:'POST', url: '/contact/', data:Contact}).success(function(data,status){
            defered.resolve(data);
            return data ;
        });
        return defered.promise ;
    }

    this.deleteContact = function(ContactId){
        var defered = $q.defer();
        $http({method:'DELETE',url:'/contact/' + ContactId}).success(function(data,status){
            defered.resolve(data);
            return data ;
        });
        return defered.promise ;
    }

});

function userCtrl($scope,sUser){

    $scope.user ={} ;

    $scope.user.firstName = 'Stephen' ;
    $scope.user.lastName = 'Ward' ;
    $scope.user.userName = 'the_dude' ;
    $scope.user.avatar = {} ;

    $scope.save = function(form){
        var promise ;
        if($scope.user._id){
             promise = sUser.putUser($scope.user) ;
        }
        else
        {
            promise = sUser.postUser($scope.user) ;
        }

        promise.then(function(response){
            for (var key in form) {
                if (form[key].$error) {
                    form[key].$error.mongoose = null;
                }
            }
            if (response.error){
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

    // load contacts into scope

    var promise = sContact.getContacts() ;
    promise.then(function(response){
        $scope.contacts = response ;
    })  ;

     if(!$scope.contacts)$scope.contacts = [{firstName:'the',lastName:'dude'}] ;

}