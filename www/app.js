//help from https://github.com/btford/angular-socket-io

var app = angular.module("mySocketIOApp", ["btford.socket-io"]);

// app.run(function(){
  
// });

app.factory('socket', function (socketFactory) {
  return socketFactory();
});

app.controller('MyController', function($scope, socket) {
  $scope.devices = [];

  socket.on('deviceDetails', function (respData) {
      $scope.devices.push(respData);
      //console.log(respData);
  });
    
});