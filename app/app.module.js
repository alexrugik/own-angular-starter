require('../assets/assets.module');
import MainComponent from './main/main.component';
import View1Component from './view1/view1.component';
import View2Component from  './view2/view2.component';
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
    View1Component,
    View2Component
]);
