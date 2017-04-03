'use strict';

module.exports = 'app.view1';

angular.module('app.view1', [])
    .component('view1', {
      templateUrl: 'app/view1/view1.template.html',
      controller: View1Controller,
      controllerAs: '$ctrl'
    })

View1Controller.$inject = ['$state'];

function View1Controller($state) {
    console.log('go');
  var $ctrl = this;
  $ctrl.$state = $state;
  $ctrl.name = 'View1Controller created by Alex';

  $ctrl.go = function() {
      console.log('clicked');
      console.log($ctrl.$state);
      $ctrl.$state.go('view1', {}, {reload: true})
          .then(function() {
              console.log('fn');
          })
          .catch(function(e) {
              console.log(e);
          });
  }

}
