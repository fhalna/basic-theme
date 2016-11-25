import ReferenceDefinitions = require('../../lib/ReferenceDefinitions');

class AbstractController {
    ic = InstantClick;
    body = $('body');
    header = $('header.main-header');
    window = $(window);
    windowWidth = this.window.width();
    windowHeight = this.window.height();
    bh = $('html, body');
    mobileMenuOpen = ko.observable(false);
    isMobile:any = ko.observable(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || this.windowWidth <= 768);

    constructor() {
        setTimeout(function () {
            this.init();
        }.bind(this), 500);

    }

    init() {
        this.window.resize(function () {
            this.windowHeight = this.window.height();
            this.windowWidth = this.window.width();

            this.isMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || this.windowWidth <= 768);
        }.bind(this));

        this.body.removeClass('loading');


        this.afterDomLoad();
    }

    afterDomLoad() {
        this.rebindVm();

    }

    public rebindVm() {
        ko.cleanNode(this.body.get(0));
        ko.applyBindings(this, this.body.get(0))
    }

    toggleMenu() {
        (this.mobileMenuOpen())?this.mobileMenuOpen(false):this.mobileMenuOpen(true);
    }


    // createScript(tag) {
    //     var script = document.createElement("script");
    //     script.innerHTML = 'fbq("track", "' + tag + '")';
    //     document.head.appendChild(script);
    // }

    randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }


    protected static createCookie(name, value, days) {
        var date, expires;
        if (days) {
            date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        } else {
            expires = "";
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    }

    public validateEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

    openPopup(data, controller?, e?) {
        $('.popup.' + data).addClass('active');
    }

    closePopups() {
        $('.popup').removeClass('active');
    }

    destruct() {

    }

}

export = AbstractController;