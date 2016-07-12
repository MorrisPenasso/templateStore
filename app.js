var myApp = angular.module("myApp", ["ngRoute"]);   //create my module


myApp.config(["$routeProvider", function ($routeProvider) {

    $routeProvider.when("/templateStore", {

        templateUrl: "views/templateStore.html",
        controller: "templateStoreCtrl"

    }).when("/templateStoreDetails/:id", {  //when i call this path, i pass the id object into controller

        templateUrl: "views/templateStoreDetails.html",
        controller: "templateStoreDetailsCtrl"

    })

    .otherwise({redirectTo: "/templateStore"}); // default path and load templateStore view and templateStoreCtrl controller

}]);


myApp.controller("myController", function () {

});