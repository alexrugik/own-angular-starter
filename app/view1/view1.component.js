class View1Controller {
    constructor() {

    }

    $onInit() {

    }
}

View1Controller.$inject = [];

export default angular.module('app.view1', [])
    .component('view1', {
        templateUrl: 'app/view1/view1.template.html',
        controller: View1Controller,
        controllerAs: '$ctrl'
    })
    .name;