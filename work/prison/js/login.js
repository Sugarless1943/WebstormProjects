/**
 * Created by Administrator on 2017/4/7.
 */
var app = angular.module('login', []);
app.controller('loginCtrl', function($scope) {
    var date = new Date();
    $scope.time = date;
    var hours = date.getHours();
    var minute = date.getMinutes();
});