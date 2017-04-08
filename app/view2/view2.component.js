import Order from './order.model';

import {
    MANAGERS,
    ORDER_TYPES,
    DATE_PICKER_STATE
} from './order.model.const';

class createOrderController {
    constructor(orderListService) {
        window.order = this;
        this.orderListService = orderListService;
    }

    $onInit() {
        this.MANAGERS = angular.copy(MANAGERS);
        this.ORDER_TYPES = angular.copy(ORDER_TYPES);
        this.datePickerState = angular.copy(DATE_PICKER_STATE);
    }

    saveOrder() {
        this.order = new Order();
        Object.assign(this.order, this.formData);
        this.order.dateOfExecution = this.datePickerState.dateOfExecution;
        this.order.createIdentifier(this.orderListService.getOrderList());
        this.orderListService.addOrder(this.order);
    }

}

createOrderController.$inject = ['orderListService'];

export default angular.module('app.view2', [])
    .component('view2', {
        templateUrl: 'app/view2/view2.template.html',
        controller: createOrderController,
        controllerAs: '$ctrl'
    })
    .name;

