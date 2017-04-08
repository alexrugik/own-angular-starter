import Order from './order.model';

import {
    MANAGERS,
    ORDER_TYPES,
    DATE_PICKER_STATE
} from './order.model.const';

class createOrderController {
    constructor() {
        window.order = this;
        this.MANAGERS = angular.copy(MANAGERS);
        this.ORDER_TYPES = angular.copy(ORDER_TYPES);
        this.datePickerState = angular.copy(DATE_PICKER_STATE);
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

