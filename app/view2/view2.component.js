import Order from './order.model';
import {
    MANAGERS,
    ORDER_TYPES
} from './order.model.const';

class createOrderController {
    constructor() {
        window.order = this;
        this.MANAGERS = angular.copy(MANAGERS);
        this.ORDER_TYPES = angular.copy(ORDER_TYPES);
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

