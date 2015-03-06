var app = angular.module("mySocketIOApp", []);

app.run(function(){
  
});

app.controller('MyController', function($scope) {
  
  $scope.data = [
  	{"name1":"value1"},
	{"name2":"value2"},
	{"name3":"value3"},
	{"name4":"value4"}
  ];
    
});