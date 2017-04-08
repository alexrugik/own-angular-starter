import {
    MANAGERS,
    ORDER_TYPES,
    DATE_PICKER_STATE
} from '../view2/order.model.const';

class View1Controller {
    constructor(orderListService) {
        this.orderListService = orderListService;
    }

    $onInit() {
        window.order = this;
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
        console.log(order);
        this.editMode = !this.editMode;
        this.editOrder = order.id;
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