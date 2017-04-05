class MainController {
    constructor() {

    }

    $onInit() {

    }
}

MainController.$inject = [];

export default angular.module('app.main', [])
    .component('main', {
        templateUrl: "app/main/main.template.html",
        controller: MainController,
        controllerAs: '$ctrl'
    })
    .name;
