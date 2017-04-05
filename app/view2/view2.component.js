class View2Controller {
    constructor() {

    }

    $onInit() {

    }
}

View2Controller.$inject = [];

export default angular.module('app.view2', [])
    .component('view2', {
        templateUrl: 'app/view2/view2.template.html',
        controller: View2Controller,
        controllerAs: '$ctrl'
    })
    .name;

