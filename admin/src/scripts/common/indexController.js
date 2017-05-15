export default class indexController {
    constructor($http, $q, $timeout, $window, $location) {
        this.showHeader = true;

        if ($location.path() === '/') {
            this.showHeader = false;
        }
    }
}