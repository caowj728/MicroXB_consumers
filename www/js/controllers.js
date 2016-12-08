angular.module('starter.controllers', [])
  .controller('loginCtrl',function ($scope,$location) {

    $scope.Title ="登录";
    $scope.jumpToUrl = function() {

      $location.path('/home/default');

    };
  });
