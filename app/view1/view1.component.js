class View1Controller {
    constructor(orderListService) {
        this.orderListService = orderListService;
    }

    $onInit() {

    }
}

View1Controller.$inject = [
    'orderListService'
];

export default angular.module('app.view1', [])
    .component('view1', {
        templateUrl: 'app/view1/view1.template.html',
        controller: View1Controller,
        controllerAs: '$ctrl'
    })
    .name;