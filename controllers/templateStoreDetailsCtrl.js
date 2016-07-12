myApp.controller("templateStoreDetailsCtrl", function ($scope, $http, $routeParams, $filter) {

    var templateId = $routeParams.id;

    $http.get("json/data.json").success(function (data) {

        //Selects a subset of items from array and returns it as a new array.
        $scope.templates = $filter("filter")(data, function (d) {

            //$scope.templates obtain new filter array with all elements to id that i passed into this controller
            return d.id == templateId;
  
        })[0];
    });
});