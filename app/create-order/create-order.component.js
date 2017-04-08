import OrderModel from '../models/order.model';

import {
    MANAGERS,
    ORDER_TYPES,
    DATE_PICKER_STATE
} from './order.model.const';

class createOrderController {
    constructor($state,
                orderListService) {
        this.$state = $state;
        this.orderListService = orderListService;
    }

    $onInit() {
        this.MANAGERS = angular.copy(MANAGERS);
        this.ORDER_TYPES = angular.copy(ORDER_TYPES);
        this.datePickerState = angular.copy(DATE_PICKER_STATE);
    }

    saveOrder() {
        this.order = new OrderModel();
        Object.assign(this.order, this.formData);
        this.order.dateOfExecution = this.datePickerState.dateOfExecution;
        this.order.createIdentifier(this.orderListService.getOrderList());
        this.orderListService.addOrder(this.order);
        this.$state.go('app.order-list');
    }
}

createOrderController.$inject = [
    '$state',
    'orderListService'
];

export default angular.module('app.view2', [])
    .component('createOrder', {
        templateUrl: 'app/create-order/create-order.template.html',
        controller: createOrderController,
        controllerAs: '$ctrl'
    })
    .name;

