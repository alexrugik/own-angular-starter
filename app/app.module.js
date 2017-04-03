require('../assets/assets.module');
import MainComponent from './main/main.component';

angular.module('app', [
    'ngMockE2E',
    'ui.router',
    'ngResource',
    MainComponent,
    require('./app.config'),
    require('./app.route'),
    require('./app.run'),
    require('./auth/auth.module'),
    require('./app.http-backend'),
    require('./core/core.module'),
    require('./view1/view1.component'),
    require('./view2/view2.component')
]);
