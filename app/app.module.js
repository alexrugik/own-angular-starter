require('../assets/assets.module');
import MainComponent from './main/main.component';
import OrderListComponent from './order-list/order-list.component';
import CreateOrderComponent from  './create-order/create-order.component';
import Services from './services/services.module';

angular.module('app', [
    'ngMockE2E',
    'ui.router',
    'ngAnimate',
    'ngResource',
    'ui.bootstrap',
    require('./app.config'),
    require('./app.route'),
    require('./app.run'),
    require('./auth/auth.module'),
    require('./app.http-backend'),
    require('./core/core.module'),
    Services,
    MainComponent,
    OrderListComponent,
    CreateOrderComponent
]);
