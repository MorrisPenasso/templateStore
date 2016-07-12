myApp.controller("templateStoreCtrl", function ($scope, $http) {

    $http.get("json/data.json").success(function (response) {   //call http at data.json file for get all data

        $scope.data = response; //if call has success, put all data into data scope object

    });

});