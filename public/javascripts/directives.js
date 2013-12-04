/**
 * Created by stephen on 11/13/13.
 */

myapp.directive('user',function(){
    return {
        restrict:"E" ,
        templateUrl:"/templates/user.html",
        controller: 'userCtrl'
    }

})

myapp.directive('contacts',function(){
    return {
        restrict:"E" ,
        templateUrl:"/templates/contacts.html",
        controller: 'contactCtrl'
    }

})
