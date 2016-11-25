require([
    'jquery',
    'knockout',
    'TweenMax',
    'lib/instantClick/instantclick',
    'lib/modernizr/modernizr-object-fit'
], ($, ko, TweenMax, InstantClick) => {
    window['ko'] = ko;
    window['$'] = $;
    window['TweenMax'] = TweenMax;

    new Main();
}); 

import ReferenceDefinitions = require('lib/ReferenceDefinitions');
import HomeController = require("app/page/HomeController");
import AbstractController = require('app/page/AbstractController');

import $ = require('jquery');
import ko = require('knockout');
import TweenMax = require('TweenMax');

class Main { 
    activeController:any;
    element:any;
    currentPage = (window['controller'])?window['controller']:'Abstract';
    body = $('body');
    ic;

    constructor() {
        var currentPage,
            vm = this;

        this.ic = InstantClick;
        this.ic.init();
        this.ic.on('change', function(){
            vm.currentPage = (window['controller'])?window['controller']:'Abstract';
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
            if(typeof vm.activeController != "undefined") {
                vm.activeController.destruct();
            }
            vm.activeController = new controller();
        }
    }
}
