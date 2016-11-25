import AbstractController = require('app/page/AbstractController');

class HomeController extends AbstractController {
    constructor() {
        super();
    }

    init() {
        super.init();

        var vm = this;
    }

    destruct() {
        super.destruct();
    }
}

export = HomeController;