var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'app/page/AbstractController'], function (require, exports, AbstractController) {
    "use strict";
    var HomeController = (function (_super) {
        __extends(HomeController, _super);
        function HomeController() {
            _super.call(this);
        }
        HomeController.prototype.init = function () {
            _super.prototype.init.call(this);
            var vm = this;
        };
        HomeController.prototype.destruct = function () {
            _super.prototype.destruct.call(this);
        };
        return HomeController;
    }(AbstractController));
    return HomeController;
});
