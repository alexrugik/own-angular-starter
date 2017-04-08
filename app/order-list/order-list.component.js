import {
    MANAGERS,
    ORDER_TYPES,
    DATE_PICKER_STATE
} from '../create-order/order.model.const';

class OrderListController {
    constructor(orderListService) {
        this.orderListService = orderListService;
    }

    $onInit() {
        this.MANAGERS = angular.copy(MANAGERS);
        this.ORDER_TYPES = angular.copy(ORDER_TYPES);
        this.datePickerState = angular.copy(DATE_PICKER_STATE);
        this.today = new Date();
    }

    isEditable(order) {
        const timeDiff = Math.abs(order.dateOfExecution.getTime() - this.today.getTime());
        const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        return Math.ceil(timeDiff / (1000 * 3600 * 24)) > 3;
    }

    toggleEdit(order) {
        this.editMode = !this.editMode;
        this.editOrder = order.id;
        this.hideAnotherEdit = this.editMode;
    }
}

OrderListController.$inject = [
    'orderListService'
];

export default angular.module('app.view1', [])
    .component('orderList', {
        templateUrl: 'app/order-list/order-list.template.html',
        controller: OrderListController,
        controllerAs: '$ctrl'
    })
    .name;