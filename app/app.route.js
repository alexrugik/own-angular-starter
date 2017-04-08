'use strict';

module.exports = 'app.route';

angular.module('app.route', [])
    .config(Route);

Route.$inject = ['$stateProvider'];

function Route($stateProvider) {
  $stateProvider
      .state('app', {
        abstract: true,
        views: {
          header: { template: '<header></header>' },
          footer: { template: '<footer></footer>' },
          '': { template: '<div ui-view></div>' }
        }
      })
      .state('app.main', {
        url: '/main',
        template: '<main></main>'
      })
      .state('app.order-list', {
        url: '/order-list',
        template: '<order-list></order-list>'
      })
      .state('app.create-order', {
        url: '/create-order',
        template: '<create-order></create-order>'
      })
}

