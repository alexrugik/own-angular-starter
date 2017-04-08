export default class OrderListService {
    constructor() {
        this.__orderList = [];
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
        const index = this.__orderList.find(item => Object.is(item.id, order.id));
        if (index === -1) {
            return;
        }
        this.__orderList.splice(index, 1);
        return this;
    }

    addListToOrderList(orderList) {
        if(!orderList.map) {
            throw new Error('add list is not array!')
        }
        this.__orderList.push(...orderList);
        return this;
    }
}