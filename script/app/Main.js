define(["require", "exports", "app/page/HomeController", 'app/page/AbstractController', 'jquery'], function (require, exports, HomeController, AbstractController, $) {
    "use strict";
    require([
        'jquery',
        'knockout',
        'TweenMax',
        'lib/instantClick/instantclick',
        'lib/modernizr/modernizr-object-fit'
    ], function ($, ko, TweenMax, InstantClick) {
        window['ko'] = ko;
        window['$'] = $;
        window['TweenMax'] = TweenMax;
        new Main();
    });
    var Main = (function () {
        function Main() {
            this.currentPage = (window['controller']) ? window['controller'] : 'Abstract';
            this.body = $('body');
            var currentPage, vm = this;
            this.ic = InstantClick;
            this.ic.init();
            this.ic.on('change', function () {
                vm.currentPage = (window['controller']) ? window['controller'] : 'Abstract';
                loadController();
            });
            loadController();
            function loadController() {
                switch (vm.currentPage.toLowerCase()) {
                    case 'home':
                        switchController(HomeController);
                        break;
                    case 'abstract':
                        switchController(AbstractController);
                        break;
                    default:
                        switchController(AbstractController);
                        break;
                }
            }
            function switchController(controller) {
                if (typeof vm.activeController != "undefined") {
                    vm.activeController.destruct();
                }
                vm.activeController = new controller();
            }
        }
        return Main;
    }());
});
