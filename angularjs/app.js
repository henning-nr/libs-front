angular.module('angularDemoApp', []).controller('AngularDemoController', function () {
  this.textColor = 'black';

  this.changeColor = function () {
    this.textColor = 'red';
  };
});
