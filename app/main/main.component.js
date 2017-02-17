module.exports = 'app.main';

angular
    .module('app.main', [])
    .component('main', {
        templateUrl: "app/main/main.jade",
        controller: MainController,
        controllerAs: '$ctrl'
    });


function MainController($state, $rootScope, $timeout, $interval, User, $http) {
    var $ctrl = this;

    function init() {
    }

    function destroy() {
    }

}

MainController.$inject = ['$state', '$rootScope', '$timeout', '$interval', 'User', '$http'];