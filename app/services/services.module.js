import OrderListService from './order-list-service';

export default angular.module('app.services', [])
    .service('orderListService', OrderListService)
    .name;