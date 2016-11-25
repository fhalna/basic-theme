define(["require", "exports"], function (require, exports) {
    "use strict";
    var AbstractController = (function () {
        function AbstractController() {
            this.ic = InstantClick;
            this.body = $('body');
            this.header = $('header.main-header');
            this.window = $(window);
            this.windowWidth = this.window.width();
            this.windowHeight = this.window.height();
            this.bh = $('html, body');
            this.mobileMenuOpen = ko.observable(false);
            this.isMobile = ko.observable(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || this.windowWidth <= 768);
            setTimeout(function () {
                this.init();
            }.bind(this), 500);
        }
        AbstractController.prototype.init = function () {
            this.window.resize(function () {
                this.windowHeight = this.window.height();
                this.windowWidth = this.window.width();
                this.isMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || this.windowWidth <= 768);
            }.bind(this));
            this.body.removeClass('loading');
            this.afterDomLoad();
        };
        AbstractController.prototype.afterDomLoad = function () {
            this.rebindVm();
        };
        AbstractController.prototype.rebindVm = function () {
            ko.cleanNode(this.body.get(0));
            ko.applyBindings(this, this.body.get(0));
        };
        AbstractController.prototype.toggleMenu = function () {
            (this.mobileMenuOpen()) ? this.mobileMenuOpen(false) : this.mobileMenuOpen(true);
        };
        // createScript(tag) {
        //     var script = document.createElement("script");
        //     script.innerHTML = 'fbq("track", "' + tag + '")';
        //     document.head.appendChild(script);
        // }
        AbstractController.prototype.randomNumber = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        };
        AbstractController.createCookie = function (name, value, days) {
            var date, expires;
            if (days) {
                date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toGMTString();
            }
            else {
                expires = "";
            }
            document.cookie = name + "=" + value + expires + "; path=/";
        };
        AbstractController.prototype.validateEmail = function (email) {
            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
        };
        AbstractController.prototype.openPopup = function (data, controller, e) {
            $('.popup.' + data).addClass('active');
        };
        AbstractController.prototype.closePopups = function () {
            $('.popup').removeClass('active');
        };
        AbstractController.prototype.destruct = function () {
        };
        return AbstractController;
    }());
    return AbstractController;
});
