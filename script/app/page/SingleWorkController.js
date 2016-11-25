var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'app/page/AbstractController'], function (require, exports, AbstractController) {
    "use strict";
    var SingleWorkController = (function (_super) {
        __extends(SingleWorkController, _super);
        function SingleWorkController() {
            _super.call(this);
            this.headerInner = $('header .inner');
            this.innerWidth = this.headerInner.width();
            this.projectImages = $('.project-images > div > div');
            this.nextProject = $('a.next-project');
        }
        SingleWorkController.prototype.init = function () {
            _super.prototype.init.call(this);
            var vm = this, slide = $('.slide'), x = 0, width = slide.find('.intro').outerWidth(true) + slide.find('.project-images').outerWidth(true) - vm.innerWidth;
            vm.window.on('resize', function () {
                vm.innerWidth = vm.headerInner.width();
                width = slide.find('.intro').outerWidth(true) + slide.find('.project-images').outerWidth(true) - vm.innerWidth;
                if (x >= width) {
                    x = width;
                }
                if (vm.isMobile()) {
                    slide.removeAttr('style');
                }
            });
            this.body.on('tap', function (e) {
                var target = $(e.target), shouldClose = false;
                if (target.parents('.project-overview').length == 0 && !target.hasClass('project-overview')) {
                    shouldClose = true;
                }
                console.log($(e.target));
                if (!target.hasClass('icon-toggle-work') && shouldClose) {
                    vm.projectOverlayOpen(false);
                }
            });
            var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel";
            this.window.bind(mousewheelevt, function (e) {
                var evt = window.event || e, evt = evt.originalEvent ? evt.originalEvent : evt, delta = evt.detail ? evt.detail * (-40) : evt.wheelDelta;
                if (!vm.isMobile()) {
                    x -= delta;
                    if (x < 0) {
                        x = 0;
                    }
                    else if (x >= width) {
                        x = width;
                    }
                    window.requestAnimationFrame(scrollHandler);
                }
            });
            function scrollHandler() {
                TweenLite.set(slide, {
                    x: -x
                });
                vm.projectImages.each(function (key, elm) {
                    var element = $(elm);
                    if (!element.hasClass('active')) {
                        vm.elementInViewport($(elm));
                    }
                });
                if (x >= width - 200 && !vm.nextProject.hasClass('visible')) {
                    vm.nextProject.addClass('visible');
                }
                else if (x <= width - 200 && vm.nextProject.hasClass('visible')) {
                    vm.nextProject.removeClass('visible');
                }
            }
            scrollHandler();
        };
        SingleWorkController.prototype.elementInViewport = function (el) {
            if (el.offset().left < this.windowWidth / 10 * 8 && el.offset().left + el.width() > this.windowWidth / 10 * 2) {
                el.addClass('active');
                TweenLite.to(el, 0.5, {
                    left: 0,
                    autoAlpha: 1
                });
            }
        };
        SingleWorkController.prototype.destruct = function () {
            _super.prototype.destruct.call(this);
        };
        return SingleWorkController;
    }(AbstractController));
    return SingleWorkController;
});
