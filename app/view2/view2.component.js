import Order from './order.model';

class createOrderController {
    constructor() {
        window.order = this;
    }

    $onInit() {

    }
}

createOrderController.$inject = [];

export default angular.module('app.view2', [])
    .component('view2', {
        templateUrl: 'app/view2/view2.template.html',
        controller: createOrderController,
        controllerAs: '$ctrl'
    })
    .name;

