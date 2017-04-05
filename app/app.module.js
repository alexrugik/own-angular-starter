require('../assets/assets.module');
import MainComponent from './main/main.component';
import View1Component from './view1/view1.component';
import View2Component from  './view2/view2.component';

angular.module('app', [
    'ngMockE2E',
    'ui.router',
    'ngResource',
    require('./app.config'),
    require('./app.route'),
    require('./app.run'),
    require('./auth/auth.module'),
    require('./app.http-backend'),
    require('./core/core.module'),
    MainComponent,
    View1Component,
    View2Component
]);
