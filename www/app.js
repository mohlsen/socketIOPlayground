//help from https://github.com/btford/angular-socket-io

var app = angular.module("mySocketIOApp", ["btford.socket-io"]);

// app.run(function(){
  
// });

app.factory('socket', function (socketFactory) {
  return socketFactory();
});

app.controller('MyController', function($scope, socket) {
  

  	//   var socket = io();
	  // socket.on('deviceDetails', function(msg){
	  //   console.log(msg);
	  // });

  //$scope.$on('deviceDetails', function (ev, respData) {
  socket.on('deviceDetails', function (respData) {
      $scope.data = respData;
      console.log(respData);
  });

 //  $scope.data = [
 //  	{"name1":"value1"},
	// {"name2":"value2"},
	// {"name3":"value3"},
	// {"name4":"value4"}
 //  ];
    
});