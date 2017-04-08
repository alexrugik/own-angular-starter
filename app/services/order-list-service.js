import OrderModel from '../models/order.model';
import ManagerModel from '../models/manager.model';

export default class OrderListService {
    constructor($http) {
        this.$http = $http;
        this.__orderList = [];
        this.getDefaultOrderList();
    }

    getOrderList() {
        return this.__orderList;
    }

    addOrder(order) {
        if (!order) {
            throw  new Error('add order no order!');
        }
        this.__orderList.push(order);
        return this;
    }

    deleteOrder(order) {
        if (!order) {
            throw  new Error('delete order no order!');
        }
        const index = this.__orderList.findIndex(item => Object.is(item.id, order.id));
        if (index === -1) {
            return;
        }
        this.__orderList.splice(index, 1);
        return this;
    }

    addListToOrderList(orderList) {
        if (!orderList.map) {
            throw new Error('add list is not array!')
        }
        this.__orderList.push(...orderList);
        return this;
    }

    getDefaultOrderList() {
        const defaultOrderModelsUrl = 'app/json/order-default-models.json';
        this.$http.get(defaultOrderModelsUrl)
            .then(result => {
                const orders = [];
                result.data.forEach(order => {
                    order.dateOfExecution = new Date(order.dateOfExecution);
                    order.dateOfCreation = new Date(order.dateOfCreation);
                    order.manager = Object.assign(new ManagerModel(), order.manager);
                    orders.push(Object.assign(new OrderModel(), order));
                });
                this.addListToOrderList(orders);
            })
    }
}

OrderListService.$inject = ['$http'];