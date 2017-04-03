'use strict';

module.exports = 'app.core.directives.myDirective';

angular.module('app.core.directives.myDirective', [])
    .directive('ravMyDirective', MyDirective);

MyDirective.$inject = ['$window'];

function MyDirective($window) {
  return {
    templateUrl: 'app/core/directives/my-directive/my-directive.template.html',
    restrict: 'E',
    scope: {
      info: '='
    },
    link: function (scope, element, attrs, controller) {
        console.log('link');
        console.log($window);
    }
  }
}
